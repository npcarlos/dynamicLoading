import {
  ShoppingCartEquipoModel,
  ShoppingCartTecnologiaModel,
  ShoppingCartPlanModel,
} from '~libraries/domain/fullstack/shopping-cart';

export interface ShoppingCartEquiposState {
  equipos: ShoppingCartEquipoModel[];
}

export interface ShoppingCartPlanesState {
  planes: ShoppingCartPlanModel[];
}

export interface ShoppingCartTecnologiasState {
  tecnologias: ShoppingCartTecnologiaModel[];
}

export interface ReducerShoppingCartState
  extends ShoppingCartEquiposState,
    ShoppingCartPlanesState,
    ShoppingCartTecnologiasState {}
