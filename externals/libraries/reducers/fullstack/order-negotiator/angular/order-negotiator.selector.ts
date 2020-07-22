import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import * as ShoppingCartReducer from './order-negotiator.reducer';
import { ShoppingCartState } from '../core/order-negotiator.state';
import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';

export interface ApplicationState {
  orderNegotiator: Map<string, any>;
}
const selectShoppingCartFeature = (state: ApplicationState): ShoppingCartState =>
  <ShoppingCartState>state.orderNegotiator.toJS();

//
const selectShoppingCartData = (state: ShoppingCartState): ShoppingCartModel => state.shoppingCart;
export const selectShoppingCart = createSelector(selectShoppingCartFeature, selectShoppingCartData);
