import { ACTUALIZAR_CONVENIOS_ACTION } from './convenios.constants';
import { Map } from 'immutable';
import { ReducerConveniosState } from './convenios.state';
import { ConvenioModel } from '~libraries/domain/common/convenios';

const initialStateValue: ReducerConveniosState = {
  convenios: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_CONVENIOS_ACTION]: (store: Map<string, any>, action: { convenios: ConvenioModel[] }) =>
    store.set('convenios', action.convenios),
};
