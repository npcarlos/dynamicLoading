import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';
import { PlanModel, EquipoModel, TecnologiaModel } from '~libraries/domain/fullstack/catalogo';
import {
  ShoppingCartEquipoModel,
  ShoppingCartPlanModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';
import * as ShoppingCartReducer from '~libraries/reducers/fullstack/shopping-cart/angular';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartStoreService {
  constructor(private store: Store<ShoppingCartReducer.ApplicationState>) {}

  getEquiposShoppingCart(): Observable<ShoppingCartEquipoModel[]> {
    return notNullSelect(ShoppingCartReducer.selectShoppingCartEquipos)(this.store);
  }

  getPlanesShoppingCart(): Observable<ShoppingCartPlanModel[]> {
    return notNullSelect(ShoppingCartReducer.selectShoppingCartPlanes)(this.store);
  }

  getTecnologiasShoppingCart(): Observable<ShoppingCartTecnologiaModel[]> {
    return notNullSelect(ShoppingCartReducer.selectShoppingCartTecnologias)(this.store);
  }

  agregarPlanShoppingCart(plan: PlanModel): void {
    this.store.dispatch(ShoppingCartReducer.agregarShoppingCartPlanes({ plan }));
  }

  agregarEquipoShoppingCart(equipo: EquipoModel): void {
    this.store.dispatch(ShoppingCartReducer.agregarShoppingCartEquipos({ equipo }));
  }

  agregarTecnologiaShoppingCart(tecnologia: TecnologiaModel): void {
    this.store.dispatch(ShoppingCartReducer.agregarShoppingCartTecnologia({ tecnologia }));
  }

  actualizarShoppingCartPlan(plan: ShoppingCartPlanModel): void {
    this.store.dispatch(ShoppingCartReducer.actualizarShoppingCartPlan({ plan }));
  }

  actualizarShoppingCartEquipo(equipo: ShoppingCartEquipoModel): void {
    this.store.dispatch(ShoppingCartReducer.actualizarShoppingCartEquipo({ equipo }));
  }

  actualizarShoppingCartTecnologia(tecnologia: ShoppingCartTecnologiaModel): void {
    this.store.dispatch(ShoppingCartReducer.actualizarShoppingCartTecnologia({ tecnologia }));
  }

  eliminarShoppingCartPlan(plan: ShoppingCartPlanModel): void {
    this.store.dispatch(ShoppingCartReducer.eliminarShoppingCartPlan({ plan }));
  }

  eliminarShoppingCartEquipo(equipo: ShoppingCartEquipoModel): void {
    this.store.dispatch(ShoppingCartReducer.eliminarShoppingCartEquipo({ equipo }));
  }

  eliminarShoppingCartTecnologia(tecnologia: ShoppingCartTecnologiaModel): void {
    this.store.dispatch(ShoppingCartReducer.eliminarShoppingCartTecnologia({ tecnologia }));
  }
}
