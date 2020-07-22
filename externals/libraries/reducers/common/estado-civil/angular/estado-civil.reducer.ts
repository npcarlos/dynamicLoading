import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/estado-civil.reducer';
import { actionsObject } from './estado-civil.actions';

const estadoCivilReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionsObject[reducerItem], reducerObject[reducerItem]))
);

export const estadoCivilFeatureKey = 'estadoCivil';

export function reducer(state: any, action: Action) {
  return estadoCivilReducer(state, action);
}
