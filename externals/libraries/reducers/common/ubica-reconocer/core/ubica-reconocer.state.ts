import { UbicaReconocerModel } from '~libraries/domain/fullstack/ubica-reconocer';

export interface UbicaReconocerState {
  ubicaReconocer: UbicaReconocerModel;
}

export interface ReducerUbicaReconocerState extends UbicaReconocerState {}
