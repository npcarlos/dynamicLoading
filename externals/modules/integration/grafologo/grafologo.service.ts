import { Injectable } from '@angular/core';

import { SoapIntegrationService } from '~modules/infraestructure/claro-http-module';
import { SoapService } from '~libraries/infraestructure/http-services/soap-service';

import { GrafologoModel, GrafologoTemplate } from '~libraries/domain/common/grafologo';
import { Observable } from 'rxjs';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { HuellaImagenModel } from '~libraries/domain/common/autenticacionBiometrica';

@Injectable({
  providedIn: 'root',
})
export class GrafologoIntegrationService extends SoapService<GrafologoTemplate, GrafologoModel> {
  base: string;
  constructor(protected soapIntegrationService: SoapIntegrationService) {
    super(soapIntegrationService, 'services.integration.common.grafologo.create');
  }

  parseResponse(response: any): GrafologoModel {
    if (response.errorDescription) {
      throw new Error(response.errorDescription);
    }
    return new GrafologoModel(response);
  }

  createGrafologo(cliente: ClienteModel, huellaImagen: HuellaImagenModel, file: any): Observable<GrafologoTemplate> {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    return new Observable((observer) => {
      reader.onload = (readerEvt) => {
        const binaryString = readerEvt.target.result;
        let base64TextString: string;
        base64TextString = btoa(<string>binaryString);
        this.fetchService('verifyIdentity', {
          clientID: this.soapIntegrationService.settings.getConfiguration(
            'services.integration.common.grafologo.create.clientID'
          ),
          accessToken: this.soapIntegrationService.settings.getConfiguration(
            'services.integration.common.grafologo.create.accessToken'
          ),
          tipo_documento: cliente.documentType,
          numero_documento: cliente.documentNumber,
          primer_nombre: cliente.firstName,
          segundo_nombre: cliente.secondName,
          primer_apellido: cliente.firstSurName,
          segundo_apellido: cliente.otherSurNames,
          tipoOperacion: this.soapIntegrationService.settings.getConfiguration(
            'services.integration.common.grafologo.create.tipoOperacion'
          ),
          ImagenHuella: huellaImagen.ImagenHuella,
          ImagenScanner: base64TextString,
        }).subscribe((response: GrafologoTemplate) => {
          observer.next(response);
          observer.complete();
        });
      };
    });
  }
}
