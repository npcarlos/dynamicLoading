import { SerialModel } from '~libraries/domain/common/serial';

export interface SerialesPlanesState {
  serialesPlanes: SerialModel[];
}
export interface SerialesEquiposState {
  serialesEquipos: SerialModel[];
}
export interface SerialesTecnologiasState {
  serialesTecnologias: SerialModel[];
}

export interface ReducerSerialState extends SerialesPlanesState, SerialesEquiposState, SerialesTecnologiasState {}
