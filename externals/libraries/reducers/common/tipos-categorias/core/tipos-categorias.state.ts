import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';

export interface TiposCategoriasState {
  tiposCategoria: TiposCategoriasModel[];
}

export interface ReducerTiposCategoriasState extends TiposCategoriasState {}
