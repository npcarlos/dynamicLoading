import { Map } from 'immutable';
import { ReducerGeneracionContratoState } from './generacion-contrato.state';
import {
  ACTUALIZAR_LEGALIZACION_ACTION,
  ACTUALIZAR_DOCUMENTO_ACTION,
  ACTUALIZAR_CONTRATO_ACTION,
} from './generacion-contrato.constants';
import { GeneracionContratoModel } from '~libraries/domain/common/generacion-contrato';

const initialStateValue: ReducerGeneracionContratoState = {
  legalizacion: null,
  documento: null,
  contrato: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_LEGALIZACION_ACTION]: (store: Map<string, any>, action: { legalizacion: GeneracionContratoModel[] }) =>
    store.set('legalizacion', action.legalizacion),
  [ACTUALIZAR_DOCUMENTO_ACTION]: (store: Map<string, any>, action: { documento: GeneracionContratoModel[] }) =>
    store.set('documento', action.documento),
  [ACTUALIZAR_CONTRATO_ACTION]: (store: Map<string, any>, action: { contrato: GeneracionContratoModel[] }) =>
    store.set('contrato', action.contrato),
};
