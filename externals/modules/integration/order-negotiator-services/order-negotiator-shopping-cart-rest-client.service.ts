import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import {
  ShoppingCartTemplate,
  ShoppingCartModel,
  ShoppingCartResponseTemplate,
} from '~libraries/domain/fullstack/order-negotiator';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartIntegrationService extends RestServiceTemplate<ShoppingCartTemplate, ShoppingCartModel> {
  tipoDocumento: string;
  parts: string[];

  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.on.shoppingCart');
  }

  // Generic parseResponse
  parseResponse(response: ShoppingCartTemplate): ShoppingCartModel {
    return new ShoppingCartModel({
      ...response,
      id: response.scID,
    });
  }

  // Get Mock
  getItemMock() {
    const text = JSON.stringify(require('./templates/shopping-cart.json'));
    return new Observable((subscriber) => subscriber.next(JSON.parse(text)));
  }

  buildGetItemURL(url: string, ...urlParams: any[]) {
    return `${super.buildGetItemURL(url, ...urlParams)}/expanded`;
  }

  parseGetItemResponse(response: ShoppingCartResponseTemplate): ShoppingCartModel {
    return this.parseResponse(response.body);
  }

  // Create Shopping Cart
  createShoppingCart(cliente: ClienteModel, direccion: DireccionModel): Observable<ShoppingCartModel> {
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(
      this,
      'createShoppingCart',
      {
        customerID: cliente.id,
        channel: 'Todos',
        owner: '8160515',
        salesPersonProfile: 'Todos',
        salesPoint: 'Todos',
        process: 'ACTIVACION',
        attrs: {
          FIRSTNAME: cliente.firstName,
          MIDDLENAME: '',
          LASTNAME: cliente.secondName,
          DOCID: cliente.documentNumber,
          TYPEDOC: cliente.darCodigoTipoDocumento(),
          EMAIL: 'yo@gmail.com',
        },
        locationAttrs: {
          DIRECCION: direccion.igacAddress,
          REGIONAL: '',
          CIUDAD: direccion.city.name,
          CITY_CODE: direccion.city.uperGeographycLevel.uperGeographycLevel.daneCode,
          DISCTRICTO: direccion.city.uperGeographycLevel.name,
          ID: direccion.addressId,
          NUMBER: direccion.addressId,
          DANE: direccion.city.daneCode,
          ESTRATO: direccion.stratum,
          HHPPID: '',
          NODE: '',
        },
      }
    );
  }

  buildCreateShoppingCartURL(url: string): string {
    return `${url}/createSC`;
  }

  parseCreateShoppingCartResponse(response: ShoppingCartResponseTemplate): ShoppingCartModel {
    return this.parseResponse(response.body);
  }

  createShoppingCartMock() {
    const text = JSON.stringify(require('./templates/shopping-cart.json'));
    return new Observable((subscriber) => subscriber.next(JSON.parse(text)));
  }

  // Accept Shopping Cart
  acceptShoppingCart(shoppingCart: ShoppingCartModel): Observable<ShoppingCartModel> {
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(
      this,
      'acceptShoppingCart',
      {},
      shoppingCart,
      {}
    );
  }

  buildAcceptShoppingCartURL(url: string, ...args: any[]): string {
    const shoppingCart: ShoppingCartModel = args.shift();
    return `${url}/${shoppingCart.scID}/acceptSC`;
  }

  parseAcceptShoppingCartResponse(response: ShoppingCartResponseTemplate): ShoppingCartModel {
    return this.parseResponse(response.body);
  }

  // Submit Shopping Cart
  submitShoppingCart(shoppingCart: ShoppingCartModel): Observable<ShoppingCartModel> {
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(
      this,
      'submitShoppingCart',
      {},
      shoppingCart,
      {}
    );
  }

  buildSubmitShoppingCartURL(url: string, ...args: any[]): string {
    const shoppingCart: ShoppingCartModel = args.shift();
    return `${url}/${shoppingCart.scID}/submitSC`;
  }

  parseSubmitShoppingCartResponse(response: ShoppingCartResponseTemplate): ShoppingCartModel {
    return this.parseResponse(response.body);
  }

  deleteShoppingCart(shoppingCart: ShoppingCartModel) {
    return this.restIntegrationService.post<ShoppingCartResponseTemplate, ShoppingCartModel>(
      this,
      'deleteShoppingCart',
      {
        id: shoppingCart.scID,
        reason: 'No desea continuar compra',
      },
      shoppingCart,
      {}
    );
  }

  deleteShoppingCartMock() {
    const text = JSON.stringify(require('./templates/shopping-cart.json'));
    return new Observable((subscriber) => subscriber.next(JSON.parse(text)));
  }

  buildDeleteShoppingCartURL(url: string, ...args: any[]) {
    const shoppingCart: ShoppingCartModel = args.shift();
    return `${url}/${shoppingCart.scID}/cancelSC`;
  }

  parseDeleteShoppingCartResponse(response: ShoppingCartResponseTemplate): ShoppingCartModel {
    return null;
  }

  getExistingIdShoppingCart(cliente: ClienteModel): Observable<ShoppingCartModel> {
    return this.restIntegrationService.get<ShoppingCartResponseTemplate, ShoppingCartModel>(
      this,
      'getExistingIdShoppingCart',
      {},
      cliente,
      {}
    );
  }

  getExistingIdShoppingCartMock() {
    const text = JSON.stringify(require('./templates/shopping-cart.json'));
    return new Observable((subscriber) => subscriber.next(JSON.parse(text)));
  }

  public buildGetExistingIdShoppingCartURL(url: string, ...args: any[]): string {
    const cliente: ClienteModel = args.shift();
    return `${url}/salesDocumentNumber/${cliente.documentNumber}/getExistingSCByDocument`;
  }

  public parseGetExistingIdShoppingCartResponse(response: ShoppingCartResponseTemplate) {
    return this.parseResponse(response.body);
  }
}
