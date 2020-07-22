import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';

export interface TipoNumeroState {
  tipoNumero: TipoNumeroModel[];
}

export interface ReducerTipoNumeroState extends TipoNumeroState {}
