import { InventarioModel } from '~libraries/domain/common/inventario';

export interface InventarioState {
  seriales: InventarioModel[];
}

export interface ReducerInventarioState extends InventarioState {}
