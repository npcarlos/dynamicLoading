import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';

export interface ShoppingCartState {
  shoppingCart: ShoppingCartModel;
}

export interface ReducerShoppingCartState extends ShoppingCartState {}
