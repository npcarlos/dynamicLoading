import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/generos.reducer';
import { actionsObject } from './generos.actions';

const generosReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const generosFeatureKey = 'generos';

export function reducer(state: any, action: Action) {
  return generosReducer(state, action);
}
