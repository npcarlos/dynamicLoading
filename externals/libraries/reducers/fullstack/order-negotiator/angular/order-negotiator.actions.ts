import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  ACTUALIZAR_SHOPPING_CART_ACTION,
  CREATE_SHOPPING_CART_ACTION,
  DELETE_SHOPPING_CART_ACTION,
  FETCH_NEW_SHOPPING_CART_ACTION,
  ADD_ITEM_PLAN_SHOPPING_CART_ACTION,
  ADD_ITEM_EQUIPO_SHOPPING_CART_ACTION,
  ADD_ITEM_TECNOLOGIA_SHOPPING_CART_ACTION,
  DELETE_ITEM_PLAN_SHOPPING_CART_ACTION,
  DELETE_ITEM_EQUIPO_SHOPPING_CART_ACTION,
  DELETE_ITEM_TECNOLOGIA_SHOPPING_CART_ACTION,
  ACCEPT_SHOPPING_CART_ACTION,
  SUBMIT_SHOPPING_CART_ACTION,
  GET_EXISTING_ID_SHOPPING_CART_ACTION,
} from '../core/order-negotiator.constants';
import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import {
  ShoppingCartPlanModel,
  ShoppingCartEquipoModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';

export const actualizarShoppingCart = createAction(
  ACTUALIZAR_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel }>()
);

export const createShoppingCart = createAction(
  CREATE_SHOPPING_CART_ACTION,
  props<{ cliente: ClienteModel; direccion: DireccionModel }>()
);
export const acceptShoppingCart = createAction(
  ACCEPT_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel }>()
);
export const submitShoppingCart = createAction(
  SUBMIT_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel }>()
);
export const deleteShoppingCart = createAction(
  DELETE_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel }>()
);

export const addItemPlanShoppingCart = createAction(
  ADD_ITEM_PLAN_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel; shoppingCartPlan: ShoppingCartPlanModel }>()
);

export const addItemEquipoShoppingCart = createAction(
  ADD_ITEM_EQUIPO_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel; equipo: ShoppingCartEquipoModel }>()
);

export const addItemTecnologiaShoppingCart = createAction(
  ADD_ITEM_TECNOLOGIA_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel; tecnologia: ShoppingCartTecnologiaModel }>()
);

export const deleteItemPlanShoppingCart = createAction(
  DELETE_ITEM_PLAN_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel; idItemShoppingCart: string }>()
);

export const deleteItemEquipoShoppingCart = createAction(
  DELETE_ITEM_EQUIPO_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel; idItemShoppingCart: string }>()
);

export const deleteItemTecnologiaShoppingCart = createAction(
  DELETE_ITEM_TECNOLOGIA_SHOPPING_CART_ACTION,
  props<{ shoppingCart: ShoppingCartModel; idItemShoppingCart: string }>()
);

export const getExistingIdShoppingCart = createAction(
  GET_EXISTING_ID_SHOPPING_CART_ACTION,
  props<{ cliente: ClienteModel }>()
);

export const fetchShoppingCart = createAction(FETCH_NEW_SHOPPING_CART_ACTION, props<{ idShoppingCart: string }>());

export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_SHOPPING_CART_ACTION]: actualizarShoppingCart,
  [CREATE_SHOPPING_CART_ACTION]: createShoppingCart,
  [ACCEPT_SHOPPING_CART_ACTION]: acceptShoppingCart,
  [SUBMIT_SHOPPING_CART_ACTION]: submitShoppingCart,
  [DELETE_SHOPPING_CART_ACTION]: deleteShoppingCart,
  [FETCH_NEW_SHOPPING_CART_ACTION]: fetchShoppingCart,
  [ADD_ITEM_PLAN_SHOPPING_CART_ACTION]: addItemPlanShoppingCart,
  [ADD_ITEM_EQUIPO_SHOPPING_CART_ACTION]: addItemEquipoShoppingCart,
  [ADD_ITEM_TECNOLOGIA_SHOPPING_CART_ACTION]: addItemTecnologiaShoppingCart,
  [DELETE_ITEM_PLAN_SHOPPING_CART_ACTION]: deleteItemPlanShoppingCart,
  [DELETE_ITEM_EQUIPO_SHOPPING_CART_ACTION]: deleteItemEquipoShoppingCart,
  [DELETE_ITEM_TECNOLOGIA_SHOPPING_CART_ACTION]: deleteItemTecnologiaShoppingCart,
  [GET_EXISTING_ID_SHOPPING_CART_ACTION]: getExistingIdShoppingCart,
};
