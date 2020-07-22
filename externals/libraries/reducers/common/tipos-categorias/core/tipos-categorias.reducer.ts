import { Map } from 'immutable';
import { ReducerTiposCategoriasState } from './tipos-categorias.state';

import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';
import { ACTUALIZAR_TIPOS_CATEGORIAS_ACTION, FETCH_TIPOS_CATEGORIAS_ACTION } from './tipos-categorias.constants';

const initialStateValue: ReducerTiposCategoriasState = {
  tiposCategoria: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_TIPOS_CATEGORIAS_ACTION]: (
    store: Map<string, any>,
    action: { tiposCategorias: TiposCategoriasModel[] }
  ) => store.set('tiposCategorias', action.tiposCategorias),
};
