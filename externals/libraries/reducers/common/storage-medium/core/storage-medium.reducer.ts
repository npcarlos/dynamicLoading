import { ACTUALIZAR_READ_STORAGE_MEDIUM_ACTION, ACTUALIZAR_SEARCH_STORAGE_MEDIUM_ACTION } from './storage-medium.constants';
import { Map } from 'immutable';
import { ReducerStorageMediumState } from './storage-medium.state';
import { ReadStorageMediumModel, SearchStorageMediumModel } from '~libraries/domain/common/storage-medium';



const initialStateValue: ReducerStorageMediumState = {
  readStorageMedium: null,
  searchStorageMedium: null
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObjectStorageMedium: {
  [action: string]: (store: Map<string, any>, action: any) => Map<string, any>
} = {
  [ACTUALIZAR_SEARCH_STORAGE_MEDIUM_ACTION]: (store: Map<string, any>, action: { searchStorageMedium: SearchStorageMediumModel }) =>
    store.set('searchStorageMedium', action.searchStorageMedium),
  [ACTUALIZAR_READ_STORAGE_MEDIUM_ACTION]: (store: Map<string, any>, action: { readStorageMedium: ReadStorageMediumModel }) =>
    store.set('readStorageMedium', action.readStorageMedium),
};
