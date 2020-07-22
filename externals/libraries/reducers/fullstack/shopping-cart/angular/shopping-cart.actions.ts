import { createAction, props, ActionCreator } from '@ngrx/store';
import {
  AGREGAR_SHOPPING_CART_EQUIPOS_ACTION,
  AGREGAR_SHOPPING_CART_PLANES_ACTION,
  AGREGAR_SHOPPING_CART_TECNOLOGIA_ACTION,
  ACTUALIZAR_SHOPPING_CART_EQUIPO_ACTION,
  ACTUALIZAR_SHOPPING_CART_PLAN_ACTION,
  ACTUALIZAR_SHOPPING_CART_TECNOLOGIA_ACTION,
  ELIMINAR_SHOPPING_CART_EQUIPO_ACTION,
  ELIMINAR_SHOPPING_CART_PLAN_ACTION,
  ELIMINAR_SHOPPING_CART_TECNOLOGIA_ACTION,
  VACIAR_SHOPPING_CART_ACTION,
  FETCH_SUBMIT_SHOPPING_CART,
} from '../core/shopping-cart.constants';
import {
  ShoppingCartEquipoModel,
  ShoppingCartPlanModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';
import { PlanModel, EquipoModel, TecnologiaModel } from '~libraries/domain/fullstack/catalogo';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)

export const agregarShoppingCartEquipos = createAction(
  AGREGAR_SHOPPING_CART_EQUIPOS_ACTION,
  props<{ equipo: EquipoModel }>()
);
export const agregarShoppingCartPlanes = createAction(
  AGREGAR_SHOPPING_CART_PLANES_ACTION,
  props<{ plan: PlanModel }>()
);
export const agregarShoppingCartTecnologia = createAction(
  AGREGAR_SHOPPING_CART_TECNOLOGIA_ACTION,
  props<{ tecnologia: TecnologiaModel }>()
);
export const actualizarShoppingCartEquipo = createAction(
  ACTUALIZAR_SHOPPING_CART_EQUIPO_ACTION,
  props<{ equipo: ShoppingCartEquipoModel }>()
);
export const actualizarShoppingCartPlan = createAction(
  ACTUALIZAR_SHOPPING_CART_PLAN_ACTION,
  props<{ plan: ShoppingCartPlanModel }>()
);
export const actualizarShoppingCartTecnologia = createAction(
  ACTUALIZAR_SHOPPING_CART_TECNOLOGIA_ACTION,
  props<{ tecnologia: ShoppingCartTecnologiaModel }>()
);
export const eliminarShoppingCartEquipo = createAction(
  ELIMINAR_SHOPPING_CART_EQUIPO_ACTION,
  props<{ equipo: ShoppingCartEquipoModel }>()
);
export const eliminarShoppingCartPlan = createAction(
  ELIMINAR_SHOPPING_CART_PLAN_ACTION,
  props<{ plan: ShoppingCartPlanModel }>()
);
export const eliminarShoppingCartTecnologia = createAction(
  ELIMINAR_SHOPPING_CART_TECNOLOGIA_ACTION,
  props<{ tecnologia: ShoppingCartTecnologiaModel }>()
);
export const vaciarShoppingCart = createAction(VACIAR_SHOPPING_CART_ACTION, props<{}>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchSubmitShoppingCart = createAction(FETCH_SUBMIT_SHOPPING_CART, props<{ idCliente: string }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [AGREGAR_SHOPPING_CART_EQUIPOS_ACTION]: agregarShoppingCartEquipos,
  [AGREGAR_SHOPPING_CART_PLANES_ACTION]: agregarShoppingCartPlanes,
  [AGREGAR_SHOPPING_CART_TECNOLOGIA_ACTION]: agregarShoppingCartTecnologia,
  [ACTUALIZAR_SHOPPING_CART_EQUIPO_ACTION]: actualizarShoppingCartEquipo,
  [ACTUALIZAR_SHOPPING_CART_PLAN_ACTION]: actualizarShoppingCartPlan,
  [ACTUALIZAR_SHOPPING_CART_TECNOLOGIA_ACTION]: actualizarShoppingCartTecnologia,
  [ELIMINAR_SHOPPING_CART_EQUIPO_ACTION]: eliminarShoppingCartEquipo,
  [ELIMINAR_SHOPPING_CART_PLAN_ACTION]: eliminarShoppingCartPlan,
  [ELIMINAR_SHOPPING_CART_TECNOLOGIA_ACTION]: eliminarShoppingCartTecnologia,
  [VACIAR_SHOPPING_CART_ACTION]: vaciarShoppingCart,

  [FETCH_SUBMIT_SHOPPING_CART]: fetchSubmitShoppingCart,
};
