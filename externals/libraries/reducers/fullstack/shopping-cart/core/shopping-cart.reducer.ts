import { Map, List } from 'immutable';
import { ReducerShoppingCartState } from './shopping-cart.state';
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
} from './shopping-cart.constants';
import {
  ShoppingCartEquipoModel,
  ShoppingCartPlanModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';
import { PlanModel, EquipoModel, TecnologiaModel } from '~libraries/domain/fullstack/catalogo';

const initialStateValue: ReducerShoppingCartState = {
  equipos: [],
  planes: [],
  tecnologias: [],
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [AGREGAR_SHOPPING_CART_EQUIPOS_ACTION]: (store: Map<string, any>, action: { equipo: EquipoModel }) => {
    const equipos = store.get('equipos').slice();

    const index = equipos.findIndex(
      (shoppingCartEquipo: ShoppingCartEquipoModel) => shoppingCartEquipo.item.id === action.equipo.id
    );

    const equipo = new ShoppingCartEquipoModel(action.equipo, (equipos[index] ? equipos[index].cantidad : 0) + 1);
    if (index < 0) {
      equipos.push(equipo);
    } else {
      equipos.splice(index, 1, equipo);
    }
    return store.set('equipos', equipos);
  },

  [AGREGAR_SHOPPING_CART_PLANES_ACTION]: (store: Map<string, any>, action: { plan: PlanModel }) => {
    const planes = store.get('planes').slice();

    const index = planes.findIndex(
      (shoppingCartPlan: ShoppingCartPlanModel) => shoppingCartPlan.item.id === action.plan.id
    );
    const plan = new ShoppingCartPlanModel(action.plan, (planes[index] ? planes[index].cantidad : 0) + 1);

    if (index < 0) {
      planes.push(plan);
    } else {
      planes.splice(index, 1, plan);
    }
    return store.set('planes', planes);
  },

  [AGREGAR_SHOPPING_CART_TECNOLOGIA_ACTION]: (store: Map<string, any>, action: { tecnologia: TecnologiaModel }) => {
    const tecnologias = store.get('tecnologias').slice();

    const index = tecnologias.findIndex(
      (shoppingCartTecnologia: ShoppingCartTecnologiaModel) => shoppingCartTecnologia.item.id === action.tecnologia.id
    );

    const tecnologia = new ShoppingCartTecnologiaModel(
      action.tecnologia,
      (tecnologias[index] ? tecnologias[index].cantidad : 0) + 1
    );
    if (index < 0) {
      tecnologias.push(tecnologia);
    } else {
      tecnologias.splice(index, 1, tecnologia);
    }
    return store.set('tecnologias', tecnologias);
  },

  [ACTUALIZAR_SHOPPING_CART_EQUIPO_ACTION]: (store: Map<string, any>, action: { equipo: ShoppingCartEquipoModel }) => {
    const equipos = store.get('equipos').slice();

    const index = equipos.findIndex(
      (shoppingCartEquipo: ShoppingCartEquipoModel) => shoppingCartEquipo.item.id === action.equipo.item.id
    );
    if (index > -1) {
      equipos.splice(index, 1, action.equipo);
    }
    return store.set('equipos', equipos);
  },

  [ACTUALIZAR_SHOPPING_CART_PLAN_ACTION]: (store: Map<string, any>, action: { plan: ShoppingCartPlanModel }) => {
    const planes = store.get('planes').slice();

    const index = planes.findIndex(
      (shoppingCartPlan: ShoppingCartPlanModel) => shoppingCartPlan.item.id === action.plan.item.id
    );

    if (index > -1) {
      planes.splice(index, 1, action.plan);
    }

    return store.set('planes', planes);
  },

  [ACTUALIZAR_SHOPPING_CART_TECNOLOGIA_ACTION]: (
    store: Map<string, any>,
    action: { tecnologia: ShoppingCartTecnologiaModel }
  ) => {
    const tecnologias = store.get('tecnologias').slice();

    const index = tecnologias.findIndex(
      (shoppingCartTecnologia: ShoppingCartTecnologiaModel) =>
        shoppingCartTecnologia.item.id === action.tecnologia.item.id
    );

    if (index > -1) {
      tecnologias.splice(index, 1, action.tecnologia);
    }

    return store.set('tecnologias', tecnologias);
  },

  [ELIMINAR_SHOPPING_CART_EQUIPO_ACTION]: (store: Map<string, any>, action: { equipo: ShoppingCartEquipoModel }) => {
    let equipos = store.get('equipos', []);
    equipos = equipos.filter((equipo: ShoppingCartEquipoModel) => equipo.item.id !== action.equipo.item.id);
    return store.set('equipos', equipos);
  },
  [ELIMINAR_SHOPPING_CART_PLAN_ACTION]: (store: Map<string, any>, action: { plan: ShoppingCartPlanModel }) => {
    let planes = store.get('planes', []);
    planes = planes.filter((plan: ShoppingCartPlanModel) => plan.item.id !== action.plan.item.id);
    return store.set('planes', planes);
  },
  [ELIMINAR_SHOPPING_CART_TECNOLOGIA_ACTION]: (
    store: Map<string, any>,
    action: { tecnologia: ShoppingCartTecnologiaModel }
  ) => {
    let tecnologias = store.get('tecnologia', []);
    tecnologias = tecnologias.filter(
      (tecnologia: ShoppingCartTecnologiaModel) => tecnologia.item.id !== action.tecnologia.item.id
    );
    return store.set('tecnologias', tecnologias);
  },
  [VACIAR_SHOPPING_CART_ACTION]: (store: Map<string, any>) =>
    store.set('equipos', []).set('planes', []).set('tecnologias', []),
};
