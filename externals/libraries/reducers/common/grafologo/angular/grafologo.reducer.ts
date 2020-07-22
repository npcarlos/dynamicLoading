import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/grafologo.reducer';
import { actionsObject } from './grafologo.actions';

const grafologoReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const grafologoFeatureKey = 'grafologo';

export function reducer(state: any, action: Action) {
  return grafologoReducer(state, action);
}
