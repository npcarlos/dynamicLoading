import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import {
  ReducerShoppingCartState,
  ShoppingCartEquiposState,
  ShoppingCartTecnologiasState,
  ShoppingCartPlanesState,
} from '../core/shopping-cart.state';
import {
  ShoppingCartEquipoModel,
  ShoppingCartPlanModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';

export interface ApplicationState {
  shoppingCart: Map<string, any>;
}

const selectShoppingCartFeature = (state: ApplicationState): ReducerShoppingCartState =>
  <ReducerShoppingCartState>state.shoppingCart.toJS();

//
const selectShoppingCartEquiposData = (state: ShoppingCartEquiposState): ShoppingCartEquipoModel[] => state.equipos;
const selectShoppingCartPlanesData = (state: ShoppingCartPlanesState): ShoppingCartPlanModel[] => state.planes;
const selectShoppingCartTecnologiasData = (state: ShoppingCartTecnologiasState): ShoppingCartTecnologiaModel[] =>
  state.tecnologias;

//
export const selectShoppingCartEquipos = createSelector(selectShoppingCartFeature, selectShoppingCartEquiposData);
export const selectShoppingCartPlanes = createSelector(selectShoppingCartFeature, selectShoppingCartPlanesData);
export const selectShoppingCartTecnologias = createSelector(
  selectShoppingCartFeature,
  selectShoppingCartTecnologiasData
);
