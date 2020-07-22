import { ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';

export interface ValidacionImeiState {
  seriales: ValidacionImeiModel[];
}

export interface ReducerValidacionImeiState extends ValidacionImeiState {}
