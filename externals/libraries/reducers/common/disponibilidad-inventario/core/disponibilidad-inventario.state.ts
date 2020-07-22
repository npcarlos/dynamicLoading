import { DisponibilidadInventarioModel } from '~libraries/domain/fullstack/disponibilidad-inventario';

export interface DisponibilidadInventarioState {
  disponibilidadInventarios: DisponibilidadInventarioModel[];
}

export interface ReducerDisponibilidadInventarioState extends DisponibilidadInventarioState {}
