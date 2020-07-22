import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/tipo-numero.reducer';
import { actionsObject } from './tipo-numero.actions';

const tipoNumeroReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const tipoNumeroFeatureKey = 'tipoNumero';

export function reducer(state: any, action: Action) {
  return tipoNumeroReducer(state, action);
}
