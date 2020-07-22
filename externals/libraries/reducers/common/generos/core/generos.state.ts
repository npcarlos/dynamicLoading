import { GenerosModel } from '~libraries/domain/common/generos';

export interface GenerosState {
  generos: GenerosModel[];
}

export interface ReducerGenerosState extends GenerosState {}
