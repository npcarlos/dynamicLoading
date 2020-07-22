import { ACTUALIZAR_UBICA_RECONOCER_ACTION } from './ubica-reconocer.constants';
import { Map } from 'immutable';
import { ReducerUbicaReconocerState } from './ubica-reconocer.state';
import { UbicaReconocerModel } from '~libraries/domain/fullstack/ubica-reconocer';

const initialStateValue: ReducerUbicaReconocerState = {
  ubicaReconocer: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_UBICA_RECONOCER_ACTION]: (store: Map<string, any>, action: { ubicaReconocer: UbicaReconocerModel }) =>
    store.set('ubicaReconocer', action.ubicaReconocer),
};
