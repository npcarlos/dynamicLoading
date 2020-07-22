import { Map } from 'immutable';
import { ReducerInventarioState } from './inventario.state';
import { ACTUALIZAR_INVENTARIO_ACTION, LIMPIAR_INVENTARIO_ACTION } from './inventario.constants';
import { InventarioModel } from '~libraries/domain/common/inventario';

const initialStateValue: ReducerInventarioState = {
  seriales: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_INVENTARIO_ACTION]: (store: Map<string, any>, action: { seriales: InventarioModel[] }) =>
    store.set('seriales', action.seriales),
  [LIMPIAR_INVENTARIO_ACTION]: (store: Map<string, any>) => store.set('seriales', null),
};
