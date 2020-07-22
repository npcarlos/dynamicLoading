import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/reservar.reducer';
import { actionsObject } from './reservar.actions';

const reservarReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const reservarFeatureKey = 'reservar';

export function reducer(state: any, action: Action) {
  return reservarReducer(state, action);
}
