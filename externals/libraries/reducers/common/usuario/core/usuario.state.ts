import { UsuarioModel } from '~libraries/domain/common/usuario';

export interface UsuarioState {
  usuario: UsuarioModel;
}


export interface ReducerUsuarioState extends UsuarioState {}
