import { ACTUALIZAR_GENEROS_ACTION } from './generos.constants';
import { Map } from 'immutable';
import { ReducerGenerosState } from './generos.state';
import { GenerosModel } from '~libraries/domain/common/generos';

const initialStateValue: ReducerGenerosState = {
  generos: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_GENEROS_ACTION]: (store: Map<string, any>, action: { generos: GenerosModel[] }) =>
    store.set('generos', action.generos),
};
