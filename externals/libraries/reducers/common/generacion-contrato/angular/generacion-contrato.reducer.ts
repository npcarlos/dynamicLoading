import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/generacion-contrato.reducer';
import { actionsObject } from './generacion-contrato.actions';

const generacionContratoReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const generacionContratoFeatureKey = 'generacionContrato';

export function reducer(state: any, action: Action) {
  return generacionContratoReducer(state, action);
}
