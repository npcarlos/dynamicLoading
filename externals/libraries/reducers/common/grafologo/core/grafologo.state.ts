import { GrafologoModel, GrafologoResponseModel } from '~libraries/domain/common/grafologo';

export interface GrafologoResponseState {
  grafologoResponse: GrafologoResponseModel;
}
export interface GrafologoState {
  grafologo: GrafologoModel;
}

export interface ReducerGrafologoState extends GrafologoState, GrafologoResponseState {}
