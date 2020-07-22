import { NumeroModel } from '~libraries/domain/common/numeros';

export interface NumerosState {
  numeros: NumeroModel[];
}

export interface ReducerNumerosState extends NumerosState {}
