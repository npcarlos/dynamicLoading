import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/authentication-id-vision.reducer';
import { actionsObject } from './authentication-id-vision.actions';

const authenticationReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const authenticationFeatureKey = 'autenticacion';

export function reducer(state: any, action: Action) {
  return authenticationReducer(state, action);
}
