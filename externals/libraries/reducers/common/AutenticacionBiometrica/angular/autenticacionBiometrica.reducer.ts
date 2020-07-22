import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/autenticacionBiometrica.reducer';
import { actionsObject } from './autenticacionBiometrica.actions';

const autenticacionBiometricaReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const autenticacionBiometricaFeatureKey = 'autenticacionBiometrica';

export function reducer(state: any, action: Action) {
  return autenticacionBiometricaReducer(state, action);
}
