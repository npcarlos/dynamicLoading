import { ACTUALIZAR_ESTADOCIVIL_ACTION } from './estado-civil.constants';
import { Map } from 'immutable';
import { ReducerEstadoCivilState } from './estado-civil.state';
import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';

const initialStateValue: ReducerEstadoCivilState = {
  estadoCivil: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_ESTADOCIVIL_ACTION]: (store: Map<string, any>, action: { estadoCivil: EstadoCivilModel[] }) =>
    store.set('estadoCivil', action.estadoCivil),
};
