import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/numeros.reducer';
import { actionsObject } from './numeros.actions';

const numerosReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const numerosFeatureKey = 'numeros';

export function reducer(state: any, action: Action) {
  return numerosReducer(state, action);
}
