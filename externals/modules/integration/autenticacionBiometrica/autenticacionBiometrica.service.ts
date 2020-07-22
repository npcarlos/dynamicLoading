import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { JwtJs } from '~libraries/resources/jwt/index';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { UsuarioModel } from '~libraries/domain/common/usuario';
import {
  ValidarAutenticacionBiometricaTemplate,
  BiometriaModel,
  BiometriaImagenModel,
  ValidarImagenAutenticacionBiometricaTemplate,
} from '~libraries/domain/common/autenticacionBiometrica';
import { ClienteModel } from '~libraries/domain/common/cliente';

interface ResponseStatus {
  code?: string;
  message?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionBiometricaIntegrationService extends RestServiceTemplate<
  ValidarAutenticacionBiometricaTemplate,
  BiometriaModel
> {
  Header: { alg: string; typ: string };
  Payload: any;
  private JwtJs: JwtJs = new JwtJs();
  public validadorError: boolean = false;

  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.autenticacion');
  }

  encriptarJwt(usuario: UsuarioModel, cliente: ClienteModel) {
    this.Header = { alg: 'HS256', typ: 'JWT' };
    this.Payload = {
      iat: moment().unix(),
      exp: moment()
        .add(
          this.restIntegrationService.settings.getConfiguration('services.integration.common.autenticacion.expiracion'),
          'minute'
        )
        .unix(),
      DataRequestFingerPrint: {
        usuario: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.usuario'
        ),
        idOperacion: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.idOperacion'
        ),
        idSucursal: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.idSucursal'
        ),
        cedula: cliente.documentNumber,
        numeroIntentos: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.numeroIntentos'
        ),
        minimoCalidad: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.minimoCalidad'
        ),
        numeroIntentosCalidad: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.numeroIntentosCalidad'
        ),
        url: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.urlCerticamara'
        ),
        urlUsuarioS: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.userS'
        ),
        urlPasswordS: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.passwordS'
        ),
        urlUsuarioM: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.userM'
        ),
        urlPasswordM: this.restIntegrationService.settings.getConfiguration(
          'services.integration.common.autenticacion.passwordM'
        ),
      },
    };
    const jwtObj = this.JwtJs.encodeJWT(
      this.Header,
      this.Payload,
      this.restIntegrationService.settings.getConfiguration('services.integration.common.autenticacion.secret')
    );
    return jwtObj;
  }

  desencriptarJwt(tokenImagenHuella: string) {
    const jwtObj = this.JwtJs.decodeJWT(tokenImagenHuella);
    try {
      return JSON.parse(jwtObj.json);
    } catch (error) {
      throw new Error('Se ha generado en el procesamiento del token: ' + error);
    }
  }

  public parseResponse(biometria: ValidarAutenticacionBiometricaTemplate): BiometriaModel {
    return null;
  }

  validarConexionBiometrico() {
    return this.restIntegrationService.get(this, 'validarConexionBiometrico', {}, { responseType: 'text' });
  }

  public buildValidarConexionBiometricoURL(url: string): string {
    return `${url}/respuesta`;
  }

  public parseValidarConexionBiometricoResponse(response) {
    const status = <ResponseStatus>response._responseStatus;
    if (status && status.code !== 'FS_ESB_0') {
      throw new Error('La conexion al biometrico no se ha detectado: ' + status.message);
    }
    return response;
  }

  validarAutenticacion(usuario: UsuarioModel, cliente: ClienteModel, onTokenGenerado: (token: string) => void) {
    const jwtTokenObj = this.encriptarJwt(usuario, cliente);
    if (onTokenGenerado) {
      onTokenGenerado(jwtTokenObj);
    }
    return this.restIntegrationService.post(this, 'validarAutenticacion', { token: jwtTokenObj }, {});
  }

  public buildValidarAutenticacionURL(url: string): string {
    return `${url}/huella`;
  }

  public parseValidarAutenticacionResponse(response: ValidarAutenticacionBiometricaTemplate): BiometriaModel {
    if (parseInt(response.CaptureFingerPrintRNECResult.Message.Code) !== 1000232) {
      throw new Error(response.CaptureFingerPrintRNECResult.Message.Title);
    }

    return new BiometriaModel(response);
  }

  solicitarEjecucionAutenticacionApp(token: string) {
    return this.restIntegrationService.get(
      this,
      'solicitarEjecucionAutenticacionApp',
      { token: token },
      { responseType: 'text' }
    );
  }

  public buildSolicitarEjecucionAutenticacionAppURL(url: string): string {
    return `${url}/respuesta`;
  }

  public parseSolicitarEjecucionAutenticacionAppResponse(response) {
    const tokenDesencriptadoResponse = this.desencriptarJwt(response);

    if (tokenDesencriptadoResponse.Resultado === 'No autorizado') {
      throw new Error('Usuario ' + tokenDesencriptadoResponse.Resultado);
    }
    if (
      tokenDesencriptadoResponse.Codigo != 1000001 &&
      tokenDesencriptadoResponse.Codigo != 1000208 &&
      tokenDesencriptadoResponse.Codigo != 2000200
    ) {
      throw new Error('Usuario ' + tokenDesencriptadoResponse);
    }
    return tokenDesencriptadoResponse;
  }

  validarAutenticacionImagenHuellaApp(token: string) {
    return this.restIntegrationService.post(this, ' validarAutenticacionImagenHuellaApp', { token: token }, {});
  }

  public buildValidarAutenticacionImagenHuellaAppURL(url: string): string {
    return `${url}/huella/imagen`;
  }

  public parseValidarAutenticacionImagenHuellaAppResponse(
    response: ValidarImagenAutenticacionBiometricaTemplate
  ): BiometriaImagenModel {
    if (response.CaptureFingerPrintImageResult.Message.Code !== 1000232) {
      throw new Error(response.CaptureFingerPrintImageResult.Message.Title);
    }
    return new BiometriaImagenModel(response);
  }

  solicitarTokenImagenHuellaApp(token: string) {
    return this.restIntegrationService.get(
      this,
      'solicitarTokenImagenHuellaApp',
      { token: token },
      { responseType: 'text' }
    );
  }

  public buildSolicitarTokenImagenHuellaAppURL(url: string): string {
    return `${url}/respuesta`;
  }

  public parseSolicitarTokenImagenHuellaAppResponse(response) {
    const imagenDesencriptadoResponse = this.desencriptarJwt(response);
    return imagenDesencriptadoResponse;
  }
}
