import { ReservarModel } from '~libraries/domain/common/reservar';

export interface ReservarState {
  reservar: ReservarModel[];
}

export interface ReducerReservarState extends ReservarState {}
