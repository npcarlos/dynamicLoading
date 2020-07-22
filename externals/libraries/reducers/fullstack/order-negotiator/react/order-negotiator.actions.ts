import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import {
  CREATE_SHOPPING_CART_ACTION,
  DELETE_SHOPPING_CART_ACTION,
  FETCH_NEW_SHOPPING_CART_ACTION,
  GET_EXISTING_ID_SHOPPING_CART_ACTION,
} from '../core/order-negotiator.constants';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';

export const createShoppingCart = (cliente: ClienteModel, direccion: DireccionModel) => ({
  type: CREATE_SHOPPING_CART_ACTION,
  cliente,
  direccion,
});

export const deleteShoppingCart = (id: string) => ({
  type: DELETE_SHOPPING_CART_ACTION,
  id,
});

export const getExistingIdShoppingCart = (id: string) => ({
  type: GET_EXISTING_ID_SHOPPING_CART_ACTION,
  id,
});

export const fetchShoppingCart = (id: string) => ({
  type: FETCH_NEW_SHOPPING_CART_ACTION,
  id,
});
