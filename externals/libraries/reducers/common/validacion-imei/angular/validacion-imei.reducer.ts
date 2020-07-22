import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/validacion-imei.reducer';
import { actionsObject } from './validacion-imei.actions';

const validacionImeiReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const validacionImeiFeatureKey = 'validacionImei';

export function reducer(state: any, action: Action) {
  return validacionImeiReducer(state, action);
}
