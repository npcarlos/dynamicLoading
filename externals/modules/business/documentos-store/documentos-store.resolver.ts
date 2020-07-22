import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import * as DocumentosReducer from '~libraries/reducers/common/documentos/angular';
import { DocumentosStoreService } from './documentos-store.service';
import { DocumentoModel } from '~libraries/domain/common/documentos';

@Injectable({
  providedIn: 'root',
})
export class DocumentosResolver extends ReducerSelectorResolver<DocumentosReducer.ApplicationState, DocumentoModel[]> {
  constructor(
    private documentosStoreService: DocumentosStoreService,
    protected store: Store<DocumentosReducer.ApplicationState>
  ) {
    super(store);
  }

  executeRequest(): boolean {
    this.documentosStoreService.solicitarDocumentos();
    return false;
  }

  getReducerSelector() {
    return DocumentosReducer.selectDocumentos;
  }
}
