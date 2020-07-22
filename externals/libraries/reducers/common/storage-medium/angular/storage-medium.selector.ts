import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerStorageMediumState, ReadStorageMediumState, SearchStorageMediumState } from '../core/storage-medium.state';
import { ReadStorageMediumModel, SearchStorageMediumModel } from '~libraries/domain/common/storage-medium';

export interface ApplicationState {
  storageMedium: Map<string, any>;
}

const selectStorageMediumFeature = (state: ApplicationState): ReducerStorageMediumState =>
  <ReducerStorageMediumState>state.storageMedium.toJS();

//
const selectReadStorageMediumData = (state: ReadStorageMediumState): ReadStorageMediumModel => state.readStorageMedium;

//
const selectSearchStorageMediumData = (state: SearchStorageMediumState): SearchStorageMediumModel => state.searchStorageMedium;

//
export const selectReadStorageMedium = createSelector(selectStorageMediumFeature, selectReadStorageMediumData);
export const selectSearchStorageMedium = createSelector(selectStorageMediumFeature, selectSearchStorageMediumData);
