import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';

export interface AtributosContextoClienteState {
  cabecera: AtributosContextoClienteModel;
}

export interface ReducerAtributosContextoClienteState extends AtributosContextoClienteState {}
