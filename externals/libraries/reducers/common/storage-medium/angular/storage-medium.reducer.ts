import { createReducer, on, Action } from '@ngrx/store';
import { reducerObjectStorageMedium, initialState } from '../core/storage-medium.reducer';
import { actionsObjectStorageMedium } from './storage-medium.actions';

const storageMediumReducer = createReducer(
  initialState,
  ...Object.keys(reducerObjectStorageMedium).map((reducerItem) => on(actionsObjectStorageMedium[reducerItem], reducerObjectStorageMedium[reducerItem]))
);

export const storageMediumFeatureKey = 'storageMedium';

export function reducerStorageMedium(state: any, action: Action) {
  return storageMediumReducer(state, action);
}


