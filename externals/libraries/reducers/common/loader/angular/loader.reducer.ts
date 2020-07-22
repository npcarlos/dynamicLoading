import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/loader.reducer';
import { actionsObject } from './loader.actions';

const generosReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const generosFeatureKey = 'loader';

export function reducer(state: any, action: Action) {
  return generosReducer(state, action);
}
