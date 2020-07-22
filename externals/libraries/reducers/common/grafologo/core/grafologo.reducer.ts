import { ACTUALIZAR_GRAFOLOGO_ACTION, ACTUALIZAR_GRAFOLOGO_RESPONSE_ACTION } from './grafologo.constants';
import { Map } from 'immutable';
import { ReducerGrafologoState } from './grafologo.state';
import { GrafologoModel, GrafologoResponseModel } from '~libraries/domain/common/grafologo';

const initialStateValue: ReducerGrafologoState = {
  grafologo: null,
  grafologoResponse: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_GRAFOLOGO_ACTION]: (store: Map<string, any>, action: { grafologo: GrafologoModel }) =>
    store.set('grafologo', action.grafologo),
  [ACTUALIZAR_GRAFOLOGO_RESPONSE_ACTION]: (
    store: Map<string, any>,
    action: { grafologoResponse: GrafologoResponseModel }
  ) => store.set('grafologoResponse', action.grafologoResponse),
};
