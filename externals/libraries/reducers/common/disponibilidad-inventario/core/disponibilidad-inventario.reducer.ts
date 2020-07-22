import { FETCH_DISP_INVENTARIO_ACTION, ACTUALIZAR_DISP_INVENTARIO_ACTION } from './disponibilidad-inventario.constants';
import { Map } from 'immutable';
import { ReducerDisponibilidadInventarioState } from './disponibilidad-inventario.state';
import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario';

const initialStateValue: ReducerDisponibilidadInventarioState = {
  disponibilidadInventarios: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_DISP_INVENTARIO_ACTION]: (
    store: Map<string, any>,
    action: { disponibilidadInventarios: DisponibilidadInventarioModel[] }
  ) => store.set('disponibilidadInventarios', action.disponibilidadInventarios),
};
