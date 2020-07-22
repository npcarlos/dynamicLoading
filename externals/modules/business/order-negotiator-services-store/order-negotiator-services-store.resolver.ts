import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { ReducerSelectorResolver } from '~libraries/resources/redux';

import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import * as OrderNegotiatorReducer from '~libraries/reducers/fullstack/order-negotiator/angular';
import { OrderNegotiatorStoreService } from './order-negotiator-services-store.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartResolver extends ReducerSelectorResolver<
  OrderNegotiatorReducer.ApplicationState,
  ShoppingCartModel
> {
  constructor(
    private orderNegotiatorService: OrderNegotiatorStoreService,
    protected store: Store<OrderNegotiatorReducer.ApplicationState>
  ) {
    super(store);
  }

  executeRequest(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let shoppingCartId = sessionStorage.getItem('shoppingCart');
    if (shoppingCartId) {
      this.orderNegotiatorService.solicitarShoppingCart(shoppingCartId);
      return false;
    } else {
      return true;
    }
  }

  getReducerSelector() {
    return OrderNegotiatorReducer.selectShoppingCart;
  }
}
