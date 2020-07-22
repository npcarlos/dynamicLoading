import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { forkJoin, Observable, from } from 'rxjs';
import { mergeMap, map, flatMap } from 'rxjs/operators';

import { ShoppingCartIntegrationService } from '~modules/integration/order-negotiator-services';
import { OrderItemIntegrationService } from '~modules/integration/order-negotiator-services';
import { CatalogoPlanesIntegrationService } from '~modules/integration/catalogo';

import { ShoppingCartModel, PoTemplate, PoItemTemplate } from '~libraries/domain/fullstack/order-negotiator';
import { CatalogoModel } from '~libraries/domain/fullstack/catalogo';

import * as ShoppingCartActions from './order-negotiator.actions';

@Injectable()
export class ShoppingCartEffects {
  loadShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.fetchShoppingCart),
      mergeMap((action) =>
        this.shoppingCartIntegrationService.getItem(action.idShoppingCart).pipe(
          flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
          map((shoppingCart: ShoppingCartModel) =>
            ShoppingCartActions.actualizarShoppingCart({
              shoppingCart,
            })
          )
        )
      )
    )
  );

  loadCreateShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.createShoppingCart),
      mergeMap((action) =>
        this.shoppingCartIntegrationService.createShoppingCart(action.cliente, action.direccion).pipe(
          map((shoppingCart: ShoppingCartModel) =>
            ShoppingCartActions.actualizarShoppingCart({
              shoppingCart,
            })
          )
        )
      )
    )
  );

  loadAcceptShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.acceptShoppingCart),
      mergeMap((action) =>
        this.shoppingCartIntegrationService.acceptShoppingCart(action.shoppingCart).pipe(
          map((shoppingCart: ShoppingCartModel) =>
            ShoppingCartActions.actualizarShoppingCart({
              shoppingCart,
            })
          )
        )
      )
    )
  );

  loadSubmitShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.submitShoppingCart),
      mergeMap((action) =>
        this.shoppingCartIntegrationService.submitShoppingCart(action.shoppingCart).pipe(
          flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
          map((shoppingCart: ShoppingCartModel) =>
            ShoppingCartActions.actualizarShoppingCart({
              shoppingCart,
            })
          )
        )
      )
    )
  );

  deleteShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.deleteShoppingCart),
      mergeMap((action) =>
        this.shoppingCartIntegrationService
          .deleteShoppingCart(action.shoppingCart)
          .pipe(map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart })))
      )
    )
  );

  getExistingIdShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.getExistingIdShoppingCart),
      mergeMap((action) =>
        this.shoppingCartIntegrationService.getExistingIdShoppingCart(action.cliente).pipe(
          flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
          map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
        )
      )
    )
  );

  addItemPlanShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.addItemPlanShoppingCart),
      mergeMap((action) =>
        this.orderItemIntegrationService.addItemPlanShoppingCart(action.shoppingCart, action.shoppingCartPlan).pipe(
          flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
          map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
        )
      )
    )
  );

  addItemEquipoShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.addItemEquipoShoppingCart),
      mergeMap((action) =>
        this.orderItemIntegrationService.addItemEquipoShoppingCart(action.shoppingCart, action.equipo).pipe(
          flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
          map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
        )
      )
    )
  );

  addItemTecnologiaShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.addItemTecnologiaShoppingCart),
      mergeMap((action) =>
        this.orderItemIntegrationService.addItemTecnologiaShoppingCart(action.shoppingCart, action.tecnologia).pipe(
          flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
          map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
        )
      )
    )
  );

  deleteItemPlanShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.deleteItemPlanShoppingCart),
      mergeMap((action) =>
        this.orderItemIntegrationService
          .deleteItemPlanShoppingCart(action.shoppingCart, action.idItemShoppingCart)
          .pipe(
            flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
            map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
          )
      )
    )
  );

  deleteItemEquipoShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.deleteItemEquipoShoppingCart),
      mergeMap((action) =>
        this.orderItemIntegrationService
          .deleteItemEquipoShoppingCart(action.shoppingCart, action.idItemShoppingCart)
          .pipe(
            flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
            map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
          )
      )
    )
  );

  deleteItemTecnologiaShoppingCart = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.deleteItemTecnologiaShoppingCart),
      mergeMap((action) =>
        this.orderItemIntegrationService
          .deleteItemTecnologiaShoppingCart(action.shoppingCart, action.idItemShoppingCart)
          .pipe(
            flatMap((shoppingCart: ShoppingCartModel) => this.queryShoppingCartItems(shoppingCart)),
            map((shoppingCart: ShoppingCartModel) => ShoppingCartActions.actualizarShoppingCart({ shoppingCart }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingCartIntegrationService: ShoppingCartIntegrationService,
    private orderItemIntegrationService: OrderItemIntegrationService,
    private catalogoPlanesIntegrationService: CatalogoPlanesIntegrationService
  ) {}

  queryShoppingCartItems(shoppingCart: ShoppingCartModel) {
    return (shoppingCart.items.length > 0
      ? forkJoin(
          shoppingCart.items.map((itemShoppingCart: PoTemplate) =>
            this.catalogoPlanesIntegrationService.fetchCatalogoItemPorId(itemShoppingCart.poIdMain).pipe(
              map((catalogoItem: CatalogoModel) => {
                itemShoppingCart.catalogoItem = catalogoItem;
                return itemShoppingCart;
              }),
              flatMap((itemShoppingCart: PoTemplate) => {
                return (itemShoppingCart.items.length > 0
                  ? forkJoin(
                      itemShoppingCart.items.map((item: PoItemTemplate) => {
                        return this.catalogoPlanesIntegrationService.fetchCatalogoItemPorId(item.poID).pipe(
                          map((catalogoItem: CatalogoModel) => {
                            item.catalogoItem = catalogoItem;
                            return item;
                          })
                        );
                      })
                    )
                  : from([[]])
                ).pipe(
                  map((items: PoItemTemplate[]) => {
                    itemShoppingCart.items = items;
                    return itemShoppingCart;
                  })
                );
              })
            )
          )
        )
      : from([[]])
    ).pipe(
      map((items) => {
        shoppingCart.items = items;
        return shoppingCart;
      })
    );
  }
}
