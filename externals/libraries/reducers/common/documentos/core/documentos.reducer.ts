import { ACTUALIZAR_DOCUMENTOS_ACTION } from './documentos.constants';
import { Map } from 'immutable';
import { ReducerDocumentosState } from './documentos.state';
import { DocumentoModel } from '~libraries/domain/common/documentos';

const initialStateValue: ReducerDocumentosState = {
  documentos: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_DOCUMENTOS_ACTION]: (store: Map<string, any>, action: { documentos: DocumentoModel[] }) =>
    store.set('documentos', action.documentos),
};
