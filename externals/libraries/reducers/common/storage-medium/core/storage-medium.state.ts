import { ReadStorageMediumModel, SearchStorageMediumModel } from '~libraries/domain/common/storage-medium';


export interface ReadStorageMediumState {
  readStorageMedium: ReadStorageMediumModel;
}

export interface SearchStorageMediumState {
  searchStorageMedium: SearchStorageMediumModel;
}

export interface ReducerStorageMediumState extends ReadStorageMediumState, SearchStorageMediumState { }
