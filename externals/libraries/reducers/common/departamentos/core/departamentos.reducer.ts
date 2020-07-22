import { ACTUALIZAR_DEPARTAMENTOS_ACTION } from './departamentos.constants';
import { Map } from 'immutable';
import { ReducerDepartamentosState } from './departamentos.state';
import { DepartamentosModel } from '~libraries/domain/common/departamentos';

const initialStateValue: ReducerDepartamentosState = {
  departamentos: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_DEPARTAMENTOS_ACTION]: (store: Map<string, any>, action: { departamentos: DepartamentosModel[] }) =>
    store.set('departamentos', action.departamentos),
};
