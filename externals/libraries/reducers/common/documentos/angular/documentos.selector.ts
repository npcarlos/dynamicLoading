import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as DocumentosReducer from './documentos.reducer';
import { ReducerDocumentosState, DocumentosState } from '../core/documentos.state';
import { DocumentoModel } from '~libraries/domain/common/documentos';

export interface ApplicationState {
  documentos: Map<string, any>;
}

const selectDepartamentosFeature = (state: ApplicationState): ReducerDocumentosState =>
  <ReducerDocumentosState>state.documentos.toJS();

//
const selectDocumentosData = (state: DocumentosState): DocumentoModel[] => state.documentos;

//
export const selectDocumentos = createSelector(selectDepartamentosFeature, selectDocumentosData);
