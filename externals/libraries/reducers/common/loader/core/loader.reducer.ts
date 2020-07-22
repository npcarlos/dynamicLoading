import { Map } from 'immutable';

import * as LoaderActions from './loader.constants';
import { ReducerLoaderState } from './loader.state';
import { EventoModel } from '~libraries/domain/common/loader';

const initialStateValue: ReducerLoaderState = {
  eventos: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [LoaderActions.REGISTRAR_EVENTO_ACTION]: (store: Map<string, any>, action: { evento: EventoModel }) => {
    const eventos: EventoModel[] = store.get('eventos', []).slice();
    eventos.push(action.evento);
    return store.set('eventos', eventos);
  },
  [LoaderActions.ELIMINAR_EVENTO_ACTION]: (store: Map<string, any>, action: { evento: EventoModel }) =>
    store.set(
      'eventos',
      store
        .get('eventos', [])
        .slice()
        .filter((evento: EventoModel) => !evento.esMismo(action.evento))
    ),
  [LoaderActions.LIMPIAR_COLA_EVENTOS_ACTION]: (store: Map<string, any>, action: { evento: EventoModel }) =>
    store.set('eventos', []),
};
