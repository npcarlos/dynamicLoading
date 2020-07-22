import { AGREGAR_DIRECCION_ACTION } from './direccion.constants';
import { Map } from 'immutable';
import { ReducerDireccionState } from './direccion.state';
import { DireccionModel } from '~libraries/domain/common/direccion';

const initialStateValue: ReducerDireccionState = {
  direcciones: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [AGREGAR_DIRECCION_ACTION]: (store: Map<string, any>, action: { direccion: DireccionModel }) => {
    const direcciones: DireccionModel[] = store
      .get('direcciones', [])
      .slice()
      .filter((direccion: DireccionModel) => direccion.id !== action.direccion.id);
    direcciones.push(action.direccion);
    return store.set('direcciones', direcciones);
  },
};
