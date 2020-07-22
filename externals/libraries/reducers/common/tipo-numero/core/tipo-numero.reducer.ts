import { ACTUALIZAR_TIPO_NUMERO_ACTION } from './tipo-numero.constants';
import { Map } from 'immutable';
import { ReducerTipoNumeroState } from './tipo-numero.state';
import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';

const initialStateValue: ReducerTipoNumeroState = {
  tipoNumero: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_TIPO_NUMERO_ACTION]: (store: Map<string, any>, action: { tipoNumero: TipoNumeroModel[] }) =>
    store.set('tipoNumero', action.tipoNumero),
};
