import { DireccionModel } from '~libraries/domain/common/direccion';

export interface DireccionState {
  direcciones: DireccionModel[];
}

export interface ReducerDireccionState extends DireccionState {}
