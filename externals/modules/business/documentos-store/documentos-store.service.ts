import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { DocumentoModel } from '~libraries/domain/common/documentos';
import * as DocumentosReducer from '~libraries/reducers/common/documentos/angular';

@Injectable({
  providedIn: 'root',
})
export class DocumentosStoreService {
  constructor(private store: Store<DocumentosReducer.ApplicationState>) {}

  // Funciones de selectores
  getDocumentos(): Observable<DocumentoModel[]> {
    return notNullSelect(DocumentosReducer.selectDocumentos)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarDocumentos() {
    this.store.dispatch(DocumentosReducer.fetchDocumentos());
  }
}
