import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AutenticacionSelectors from '~libraries/reducers/common/autenticacionBiometrica/angular/autenticacionBiometrica.selector';
import {
  fetchConexionBiometrico,
  fetchAutenticacion,
  fetchSolicitarEjecucionApp,
  fetchValidarImagenHuellaApp,
  actualizaTokenAutenticacion,
  fetchSolicitarTokenImagenHuellaApp,
} from '~libraries/reducers/common/autenticacionBiometrica/angular/autenticacionBiometrica.actions';
import { Observable } from 'rxjs';
import { SettingsService } from '~modules/infraestructure/settings/settings.service';
import { JwtJs } from '~libraries/resources/jwt/index';

import {
  BiometriaModel,
  HuellaImagenModel,
  EjecucionNutModel,
  BiometriaImagenModel,
} from '~libraries/domain/common/autenticacionBiometrica';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { AutenticacionBiometricaIntegrationService } from '~modules/integration/autenticacionBiometrica/autenticacionBiometrica.service';
import { notNullSelect } from '~libraries/resources/redux/selector';
import { ClienteModel } from '~libraries/domain/common/cliente';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionBiometricaStoreService {
  Header: { alg: string; typ: string };
  Payload: any;
  private JwtJs: JwtJs = new JwtJs();

  constructor(protected settings: SettingsService, private store: Store<AutenticacionSelectors.ApplicationState>) {}

  // Funciones de selectores

  getConexionBiometrico(): Observable<string> {
    return notNullSelect(AutenticacionSelectors.selectConexionBiometrico)(this.store);
  }

  getAutenticacion(): Observable<BiometriaModel> {
    return notNullSelect(AutenticacionSelectors.selectAutenticacion)(this.store);
  }

  getTokenAutenticacion(): Observable<string> {
    return notNullSelect(AutenticacionSelectors.selectTokenAutenticacion)(this.store);
  }

  getEjecucionApp(): Observable<EjecucionNutModel> {
    return notNullSelect(AutenticacionSelectors.selectSolicitarEjecucionApp)(this.store);
  }

  getAutenticacionImagenHuellaApp(): Observable<BiometriaImagenModel> {
    return notNullSelect(AutenticacionSelectors.selectValidarImagenHuellaApp)(this.store);
  }

  getTokenImagenHuellaApp(): Observable<HuellaImagenModel> {
    return notNullSelect(AutenticacionSelectors.selectSolicitarImagenHuellaApp)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarConexionBiometrico() {
    this.store.dispatch(fetchConexionBiometrico());
  }

  solicitarTokenAutenticacion(usuario: UsuarioModel, cliente: ClienteModel) {
    this.store.dispatch(
      fetchAutenticacion({
        usuario,
        cliente,
        onTokenGenerado: (token) => this.store.dispatch(actualizaTokenAutenticacion({ token })),
      })
    );
  }

  solicitarEjecucionApp(tokenNut: string) {
    this.store.dispatch(fetchSolicitarEjecucionApp({ tokenNut }));
  }

  validarAutenticacionImagenHuellaApp(tokenAutenticacion: string) {
    this.store.dispatch(fetchValidarImagenHuellaApp({ tokenAutenticacion }));
  }

  solicitarTokenImagenHuellaApp(tokenImagen: string) {
    this.store.dispatch(fetchSolicitarTokenImagenHuellaApp({ tokenImagen }));
  }
}
