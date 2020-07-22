import { ACTUALIZAR_NUMEROS_ACTION } from './numeros.constants';
import { Map } from 'immutable';
import { ReducerNumerosState } from './numeros.state';
import { NumeroModel } from '~libraries/domain/common/numeros';

const initialStateValue: ReducerNumerosState = {
  numeros: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_NUMEROS_ACTION]: (store: Map<string, any>, action: { numeros: NumeroModel[] }) =>
    store.set('numeros', action.numeros),
};
