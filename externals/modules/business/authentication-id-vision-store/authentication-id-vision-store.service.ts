import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthenticationSelectors from '~libraries/reducers/common/authentication/angular';
import {
  fetchAuthenticationIDVIsion,
  fetchCheckByOtp,
  fetchSendPinOtp,
  ActualizarAuthenticationIDVIsion,
} from '~libraries/reducers/common/authentication/angular';
import { AuthenticationModel } from '~libraries/domain/common/authenticationIdVision';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import { DocumentoClienteModel } from '~libraries/domain/common/authenticationIdVision/authenticationCliente';
import { notNullSelect } from '~libraries/resources/redux/selector';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationStoreService {
  constructor(private store: Store<AuthenticationSelectors.ApplicationState>) {}
  // Funciones de selectores
  getAuthentication(): Observable<AuthenticationModel> {
    return notNullSelect(AuthenticationSelectors.selectAuthentication)(this.store);
  }

  getCheckByOtp(): Observable<AuthenticationModel> {
    return notNullSelect(AuthenticationSelectors.selectCheckByOt)(this.store);
  }

  getSendPinByOtp(): Observable<AuthenticationModel> {
    return notNullSelect(AuthenticationSelectors.selectSendPinOtp)(this.store);
  }
  // Funciones de fetch (acciones asociadas a los effects)
  requestAuthentication(cliente: ClienteModel, direccion: DireccionModel, documentoCliente: DocumentoClienteModel) {
    this.store.dispatch(fetchAuthenticationIDVIsion({ cliente, direccion, documentoCliente }));
  }

  requestCheckByOtp(authenticationIDVision: AuthenticationModel, documentoCliente: DocumentoClienteModel) {
    this.store.dispatch(fetchCheckByOtp({ authenticationIDVision, documentoCliente }));
  }

  requestSendPinOtp(authenticationOTP: AuthenticationModel) {
    this.store.dispatch(fetchSendPinOtp({ authenticationOTP }));
  }
}
