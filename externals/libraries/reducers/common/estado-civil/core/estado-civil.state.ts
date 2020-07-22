import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';

export interface EstadoCivilState {
  estadoCivil: EstadoCivilModel[];
}

export interface ReducerEstadoCivilState extends EstadoCivilState {}
