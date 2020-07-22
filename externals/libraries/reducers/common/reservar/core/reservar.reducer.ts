import { ACTUALIZAR_RESERVAR_ACTION } from './reservar.constants';
import { Map } from 'immutable';
import { ReducerReservarState } from './reservar.state';
import { ReservarModel } from '~libraries/domain/common/reservar';

const initialStateValue: ReducerReservarState = {
  reservar: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_RESERVAR_ACTION]: (store: Map<string, any>, action: { reservar: ReservarModel }) =>
    store.set('reservar', action.reservar),
};
