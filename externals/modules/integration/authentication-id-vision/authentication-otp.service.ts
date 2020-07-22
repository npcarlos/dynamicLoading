import { Injectable } from '@angular/core';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import {
  AuthenticationTemplate,
  AuthenticationModel,
  AuthenticationResponseTemplate,
} from '~libraries/domain/common/authenticationIdVision';

import { Observable } from 'rxjs';
import { DocumentoClienteModel } from '~libraries/domain/common/authenticationIdVision/authenticationCliente';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationByOTPService extends RestServiceTemplate<AuthenticationTemplate, AuthenticationModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.checkByOTP');
  }

  checkByOTPMock() {
    const checkByOtpResponse = require('./authentication-id-vision.json');
    return new Observable<AuthenticationModel>((subscriber) => {
      subscriber.next(checkByOtpResponse);
    });
  }


  checkByOTP(
    authenticationByOTP: AuthenticationModel,
    documentoCliente: DocumentoClienteModel
  ): Observable<AuthenticationModel> {
    return this.restIntegrationService.put<AuthenticationTemplate, AuthenticationModel>(this, 'checkByOTP', {
      headerRequest: {
        transactionId: 'string',
        system: 'string',
        user: 'string',
        password: 'string',
        requestDate: new Date().toISOString(),
        ipApplication: 'string',
        traceabilityId: 'string',
      },
      applicationId: authenticationByOTP.ResponseInfo.ApplicationId,
      fields: [
        {
          key: 'ValidationMethod',
          value: documentoCliente.validationMethod,
        },
        {
          key: 'PhoneType',
          value: documentoCliente.phoneType,
        },
        {
          key: 'MobilePhoneList',
          value: authenticationByOTP.buscarLineasMoviles(),
        },
        {
          key: 'LandLineList',
          value: authenticationByOTP.buscarLineasFijas(),
        },
        {
          key: 'SelectedPhoneNumber',
          value: documentoCliente.selectedPhoneNumber,
        },
        {
          key: 'Action',
          value: '', //TODO,
        },
      ],
    });
  }

  parseCheckByOtpResponse(response: AuthenticationResponseTemplate): AuthenticationModel {
    console.log('service authentication check by otp', response.DCResponse);
    return new AuthenticationModel(response.DCResponse);
  }

  buildCheckByOtpURL(url: string): string {
    return `${url}/sendPinForCheckOtp/`;
  }

  sendPinForCheckOtpMock() {
    const sendPinOtpResponse = require('./authentication-id-vision.json');
    return new Observable<AuthenticationModel>((suscriber) => {
      suscriber.next(sendPinOtpResponse);
    });
  }

  sendPinForCheckOtp(sendPinOtp: AuthenticationModel): Observable<AuthenticationModel> {
    return this.restIntegrationService.put<AuthenticationTemplate, AuthenticationModel>(this, 'sendPinForCheckOtp', {
      headerRequest: {
        transactionId: 'string',
        system: 'string',
        user: 'string',
        password: 'string',
        requestDate: new Date().toISOString(),
        ipApplication: 'string',
        traceabilityId: 'string',
      },
      applicationId: sendPinOtp.ResponseInfo.ApplicationId,
      fields: [
        {
          key: 'PinNumber',
          value: sendPinOtp.codigoOtp(),
        },
        {
          key: 'Action',
          value: '1', //TODO,
        },
      ],
    });
  }

  parseSendPinByOtpResponse(response: AuthenticationResponseTemplate): AuthenticationModel {
    console.log('service authentication send pin otp', response.DCResponse);
    return new AuthenticationModel(response.DCResponse);
  }

  // Generic parseResponse
  parseResponse(response: AuthenticationTemplate): AuthenticationModel {
    return new AuthenticationModel(response);
  }
}
