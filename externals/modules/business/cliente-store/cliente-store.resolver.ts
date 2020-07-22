import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import { ClienteModel } from '~libraries/domain/common/cliente';
import * as ClienteReducer from '~libraries/reducers/common/cliente/angular';
import { ClienteStoreService } from './cliente-store.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteResolver extends ReducerSelectorResolver<ClienteReducer.ApplicationState, ClienteModel> {
  constructor(
    private clienteStoreService: ClienteStoreService,
    protected store: Store<ClienteReducer.ApplicationState>
  ) {
    super(store);
  }

  executeRequest(): boolean {
    let account = sessionStorage.getItem('account');
    let documentType = sessionStorage.getItem('documentType');
    let documentNumber = sessionStorage.getItem('documentNumber');

    account = account !== 'null' ? account : null;
    documentType = documentType !== 'null' ? documentType : null;
    documentNumber = documentNumber !== 'null' ? documentNumber : null;

    if (account) {
      this.clienteStoreService.solicitarCliente(account);
    } else {
      const cliente = new ClienteModel({
        documentType: documentType,
        documentNumber: documentNumber,
      });
      this.clienteStoreService.actualizarCliente(cliente);
    }
    return false;
  }

  getReducerSelector() {
    return ClienteReducer.selectCliente;
  }
}
