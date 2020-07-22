import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/matriz.reducer';
import { actionsObject } from './matriz.actions';

const riesgoReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const matrizRiesgoFeatureKey = 'riesgo';

export function reducer(state: any, action: Action) {
  return riesgoReducer(state, action);
}
