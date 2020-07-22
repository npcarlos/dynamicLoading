import { ACTUALIZAR_CIUDADES_ACTION } from './ciudades.constants';
import { Map } from 'immutable';
import { ReducerCiudadesState } from './ciudades.state';
import { CiudadesModel } from '~libraries/domain/common/ciudades';

const initialStateValue: ReducerCiudadesState = {
  ciudades: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_CIUDADES_ACTION]: (store: Map<string, any>, action: { ciudades: CiudadesModel[] }) =>
    store.set('ciudades', action.ciudades),
};
