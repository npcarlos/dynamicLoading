import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import {
  ShoppingCartTemplate,
  ShoppingCartModel,
  ShoppingCartResponseTemplate,
} from '~libraries/domain/fullstack/order-negotiator';
import {
  ShoppingCartPlanModel,
  ShoppingCartEquipoModel,
  ShoppingCartTecnologiaModel,
} from '~libraries/domain/fullstack/shopping-cart';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class OrderItemIntegrationService extends RestServiceTemplate<ShoppingCartTemplate, ShoppingCartModel> {
  tipoDocumento: string;
  parts: string[];

  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.on.productOffer');
  }

  // Generic parseResponse
  parseResponse(response: ShoppingCartTemplate): ShoppingCartModel {
    return new ShoppingCartModel({
      ...response,
      id: response.scID,
    });
  }

  // Add Item
  addItemPlanShoppingCart(
    shoppingCart: ShoppingCartModel,
    shoppingCartPlan: ShoppingCartPlanModel
  ): Observable<ShoppingCartModel> {
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(this, 'addItem', {
      scID: shoppingCart.scID,
      poID: shoppingCartPlan.item.id,
      subType: 'plan',
      itemParentID: '',
      quantity: shoppingCartPlan.cantidad,
      returnPrices: true,
      productOfferAttrs: {
        TipoPlan: 'Abierto',
      },
      resourceCharacs: {
        SDP_ID: '1',
        resourceNumber: '',
        iccid: '8957102300000128693', //activacion.iccid,
        imei: '',
        imsi: '732102300128693', // activacion.imsi
        ki: 'E0812825D990501783009C864DEC8B13',
        puk: '',
        serialNumber: '8957102300000128693',
        technology: 'USIM',
      },
    });
  }

  addItemEquipoShoppingCart(
    shoppingCart: ShoppingCartModel,
    equipo: ShoppingCartEquipoModel
  ): Observable<ShoppingCartModel> {
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(this, 'addItem', {
      scID: shoppingCart.scID,
      poID: equipo.item.id,
      subType: 'equipment',
      itemParentID: '',
      quantity: equipo.cantidad,
      returnPrices: true,
      productOfferAttrs: {},
      resourceCharacs: {
        Color: '',
        CodigoMaterial: '70026279',
        CodigoMaterialHijo: '',
        IMEI1: '869210367746516',
        IMEI2: '',
        SerialNumber: 'JND5T12640442246',
        TecnologiaEquipos: '',
        ModeloEquipos: 'MOTO C 4G XT1756',
        FabricanteEquipos: '',
        MemoriaInterna: '8 GB ROM / 1 GB RAM',
      },
    });
  }

  addItemTecnologiaShoppingCart(
    shoppingCart: ShoppingCartModel,
    tecnologia: ShoppingCartTecnologiaModel
  ): Observable<ShoppingCartModel> {
    // TODO ajustar a los cambios de petición requerido
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(this, 'addItem', {
      scID: shoppingCart.scID,
      poID: tecnologia.item.id,
      subType: 'technology',
      returnPrices: true,
      itemParentID: '',
      quantity: tecnologia.cantidad,
      productOfferAttrs: {},
      resourceCharacs: {
        Color: '',
        CodigoMaterial: '70026279',
        CodigoMaterialHijo: '',
        IMEI1: '869210367746516',
        IMEI2: '',
        SerialNumber: 'JND5T12640442246',
        TecnologiaEquipos: '',
        ModeloEquipos: 'MOTO C 4G XT1756',
        FabricanteEquipos: '',
        MemoriaInterna: '8 GB ROM / 1 GB RAM',
      },
    });
  }

  buildAddItemURL(url: string) {
    return `${url}/addItem`;
  }

  parseAddItemResponse(response: ShoppingCartResponseTemplate): ShoppingCartModel {
    return this.parseResponse(response.body);
  }

  addItemMock() {
    const text = JSON.stringify(require('./templates/shopping-cart.json'));
    return new Observable((subscriber) => subscriber.next(JSON.parse(text)));
  }

  // Delete Item
  deleteItemPlanShoppingCart(shoppingCart: ShoppingCartModel, idItemShoppingCart: string) {
    const itemID = this.obtenerIdItemShoppingCart(idItemShoppingCart, shoppingCart.items);
    return this.restIntegrationService.delete<ShoppingCartResponseTemplate, ShoppingCartModel>(this, 'deleteItem', {
      scID: shoppingCart.scID,
      subType: 'plan',
      returnPrices: true,
      itemID: itemID,
    });
  }

  deleteItemEquipoShoppingCart(shoppingCart: ShoppingCartModel, idItemShoppingCart: string) {
    const itemID = this.obtenerIdItemShoppingCart(idItemShoppingCart, shoppingCart.items);
    return this.restIntegrationService.delete<ShoppingCartResponseTemplate, ShoppingCartModel>(this, 'deleteItem', {
      scID: shoppingCart.scID,
      subType: 'equipment',
      returnPrices: true,
      itemID: itemID,
    });
  }

  deleteItemTecnologiaShoppingCart(shoppingCart: ShoppingCartModel, idItemShoppingCart: string) {
    const itemID = this.obtenerIdItemShoppingCart(idItemShoppingCart, shoppingCart.items);
    return this.restIntegrationService.delete<ShoppingCartResponseTemplate, ShoppingCartModel>(this, 'deleteItem', {
      scID: shoppingCart.scID,
      subType: 'technology',
      returnPrices: true,
      itemID: itemID,
    });
  }

  public buildDeleteItemURL(url: string): string {
    return `${url}/deleteItem`;
  }

  public parseDeleteItemResponse(response: ShoppingCartResponseTemplate) {
    return this.parseResponse(response.body);
  }

  deleteItemMock() {
    const text = JSON.stringify(require('./templates/shopping-cart.json'));
    return new Observable((subscriber) => subscriber.next(JSON.parse(text)));
  }

  obtenerIdItemShoppingCart(poID: string, items: any[]): string {
    let itemID: string = poID;
    for (let items2 of items) {
      for (let key1 in items2) {
        if (key1 == 'items') {
          for (let items3 of items2[key1]) {
            for (let key2 in items3) {
              if (key2 == 'poID') {
                if (items3[key2] == poID) {
                  itemID = items3['itemID'];
                }
              }
            }
          }
        }
      }
    }
    return itemID;
  }
}
