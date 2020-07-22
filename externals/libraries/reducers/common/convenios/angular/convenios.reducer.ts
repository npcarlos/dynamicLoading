import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/convenios.reducer';
import { actionsObject } from './convenios.actions';

const conveniosReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const conveniosFeatureKey = 'convenios';

export function reducer(state: any, action: Action) {
  return conveniosReducer(state, action);
}
