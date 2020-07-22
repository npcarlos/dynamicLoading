import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import { DireccionModel } from '~libraries/domain/common/direccion';
import { ClienteModel } from '~libraries/domain/common/cliente';
import {
  ShoppingCartPlanModel,
  ShoppingCartEquipoModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';

import * as OrderNegotiatorReducer from '~libraries/reducers/fullstack/order-negotiator/angular';

@Injectable({
  providedIn: 'root',
})
export class OrderNegotiatorStoreService {
  constructor(private store: Store<OrderNegotiatorReducer.ApplicationState>) {}

  // Funciones de selectores
  getShoppingCart(): Observable<ShoppingCartModel> {
    return notNullSelect(OrderNegotiatorReducer.selectShoppingCart)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarShoppingCart(idShoppingCart: string) {
    this.store.dispatch(OrderNegotiatorReducer.fetchShoppingCart({ idShoppingCart }));
  }

  crearShoppingCart(cliente: ClienteModel, direccion: DireccionModel) {
    this.store.dispatch(OrderNegotiatorReducer.createShoppingCart({ cliente, direccion }));
  }

  acceptShoppingCart(shoppingCart: ShoppingCartModel) {
    this.store.dispatch(OrderNegotiatorReducer.acceptShoppingCart({ shoppingCart }));
  }

  submitShoppingCart(shoppingCart: ShoppingCartModel) {
    this.store.dispatch(OrderNegotiatorReducer.submitShoppingCart({ shoppingCart }));
  }

  limpiarShoppingCart() {
    this.store.dispatch(OrderNegotiatorReducer.actualizarShoppingCart({ shoppingCart: null }));
  }

  // Funciones Add Item
  agregarItemPlanShoppingCart(shoppingCart: ShoppingCartModel, shoppingCartPlan: ShoppingCartPlanModel) {
    this.store.dispatch(OrderNegotiatorReducer.addItemPlanShoppingCart({ shoppingCart, shoppingCartPlan }));
  }

  agregarItemEquipoShoppingCart(shoppingCart: ShoppingCartModel, equipo: ShoppingCartEquipoModel) {
    this.store.dispatch(OrderNegotiatorReducer.addItemEquipoShoppingCart({ shoppingCart, equipo }));
  }

  agregarItemTecnologiaShoppingCart(shoppingCart: ShoppingCartModel, tecnologia: ShoppingCartTecnologiaModel) {
    this.store.dispatch(OrderNegotiatorReducer.addItemTecnologiaShoppingCart({ shoppingCart, tecnologia }));
  }

  // Funciones Delete Item
  eliminarItemPlanShoppingCart(shoppingCart: ShoppingCartModel, idItemShoppingCart: string) {
    this.store.dispatch(OrderNegotiatorReducer.deleteItemPlanShoppingCart({ shoppingCart, idItemShoppingCart }));
  }

  eliminarItemEquipoShoppingCart(shoppingCart: ShoppingCartModel, idItemShoppingCart: string) {
    this.store.dispatch(OrderNegotiatorReducer.deleteItemEquipoShoppingCart({ shoppingCart, idItemShoppingCart }));
  }

  eliminarItemTecnologiaShoppingCart(shoppingCart: ShoppingCartModel, idItemShoppingCart: string) {
    this.store.dispatch(OrderNegotiatorReducer.deleteItemTecnologiaShoppingCart({ shoppingCart, idItemShoppingCart }));
  }

  eliminarShoppingCart(shoppingCart: ShoppingCartModel) {
    this.store.dispatch(OrderNegotiatorReducer.deleteShoppingCart({ shoppingCart }));
  }

  obtenerIdExistenteShoppingCart(cliente: ClienteModel) {
    this.store.dispatch(OrderNegotiatorReducer.getExistingIdShoppingCart({ cliente }));
  }
}
