import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/ubica-reconocer.reducer';
import { actionObject } from './ubica-reconocer.actions';

const ubicaReconocerReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionObject[reducerItem], reducerObject[reducerItem]))
);

export const ubicaReconocerFeatureKey = 'ubicaReconocer';

export function reducer(state: any, action: Action) {
  return ubicaReconocerReducer(state, action);
}
