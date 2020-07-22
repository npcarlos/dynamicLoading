import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/serial.reducer';
import { actionsObject } from './serial.actions';

const serialReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const serialFeatureKey = 'serial';

export function reducer(state: any, action: Action) {
  return serialReducer(state, action);
}
