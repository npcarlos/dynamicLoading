import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/documentos.reducer';
import { actionsObject } from './documentos.actions';

const documentosReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const documentosFeatureKey = 'documentos';

export function reducer(state: any, action: Action) {
  return documentosReducer(state, action);
}
