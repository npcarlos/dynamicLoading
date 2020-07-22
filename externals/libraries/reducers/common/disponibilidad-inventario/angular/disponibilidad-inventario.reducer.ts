import { createReducer, on, Action } from '@ngrx/store';
import { reducerObject, initialState } from '../core/disponibilidad-inventario.reducer';
import { actionObject } from './disponibilidad-inventario.actions';

const disponibilidadInventarioReducer = createReducer(
  initialState,
  ...Object.keys(reducerObject).map((reducerItem) => on(actionObject[reducerItem], reducerObject[reducerItem]))
);

export const disponibilidadInventarioFeatureKey = 'disponibilidadInventario';

export function reducer(state: any, action: Action) {
  return disponibilidadInventarioReducer(state, action);
}
