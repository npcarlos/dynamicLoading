import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import * as AtributosContextoClienteReducer from '~libraries/reducers/fullstack/atributos-contexto-cliente/angular';
import { AtributosContextoClienteStoreService } from './atributos-contexto-cliente-store.service';
import { ClienteModel } from '~libraries/domain/common/cliente';

@Injectable({
  providedIn: 'root',
})
export class AtributosContextoClienteResolver extends ReducerSelectorResolver<
  AtributosContextoClienteReducer.ApplicationState,
  AtributosContextoClienteModel
> {
  constructor(
    private atributosContextoClienteStoreService: AtributosContextoClienteStoreService,
    protected store: Store<AtributosContextoClienteReducer.ApplicationState>
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

    this.atributosContextoClienteStoreService.solicitarAtributosContextoCliente(
      ClienteModel.obtenerCodigoTipoDocumento(parseInt(documentType)),
      documentNumber
    );
    return false;
  }

  getReducerSelector() {
    return AtributosContextoClienteReducer.selectAtributosContextoCliente;
  }
}
