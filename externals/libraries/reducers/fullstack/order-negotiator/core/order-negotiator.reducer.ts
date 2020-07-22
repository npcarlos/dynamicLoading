import { Map } from 'immutable';
import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';

import {
  CREATE_SHOPPING_CART_ACTION,
  DELETE_SHOPPING_CART_ACTION,
  ACTUALIZAR_SHOPPING_CART_ACTION,
} from './order-negotiator.constants';
import { ReducerShoppingCartState } from './order-negotiator.state';

const initialStateValue: ReducerShoppingCartState = {
  shoppingCart: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_SHOPPING_CART_ACTION]: (store: Map<string, any>, action: { shoppingCart: ShoppingCartModel }) => {
    sessionStorage.setItem('shoppingCart', action.shoppingCart ? action.shoppingCart.id : '');
    return store.set('shoppingCart', action.shoppingCart);
  },
};
