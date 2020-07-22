import { ACTUALIZAR_VALIDACION_IMEI_ACTION } from './validacion-imei.constants';
import { Map } from 'immutable';
import { ReducerValidacionImeiState } from './validacion-imei.state';
import { ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';

const initialStateValue: ReducerValidacionImeiState = {
  seriales: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_VALIDACION_IMEI_ACTION]: (store: Map<string, any>, action: { seriales: ValidacionImeiModel[] }) =>
    store.set('seriales', action.seriales),
};
