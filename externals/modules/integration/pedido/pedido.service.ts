import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';

import { PedidoTemplate, PedidoModel } from '~libraries/domain/common/pedido/pedido';
import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { DireccionModel } from '~libraries/domain/common/direccion';

declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class PedidoIntegrationService extends RestServiceTemplate<PedidoTemplate, PedidoModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.pedido');
  }

  fetchPedido(
    shoppingCart: ShoppingCartModel,
    cliente: ClienteModel,
    usuario: UsuarioModel,
    direccion: DireccionModel
  ): Observable<PedidoModel> {
    const header = this.restIntegrationService.settings.getConfiguration(`${this.alias}.header`);
    const headerPurchaseOrder = this.obtenerHeaderPurchaseOrder(shoppingCart, cliente, usuario, direccion);
    const portabilityText = this.obtenerPortabilityText(cliente);
    const detailPurchaseOrderList = this.obtenerDetailPurchaseOrderList(shoppingCart, usuario);
    const conditionPurchaseOrderList = this.obtenerConditionPurchaseOrderList(shoppingCart);

    const nose = {
      ...header,
      ...headerPurchaseOrder,
      text03: '',
      deliverDate: new Date().toISOString().slice(0, 10),
      portabilityDate: '',
      ...portabilityText,
      serialRequestId: shoppingCart.scID,
      datePrice: new Date().toISOString().slice(0, 10),
      initialPaymentValue: '0',
      society: 'CO15',
      ...detailPurchaseOrderList,
      ...conditionPurchaseOrderList,
    };
    debugger;

    return this.restIntegrationService.put<PedidoTemplate, PedidoModel>(this, 'getPedido', {
      ...header,
      ...headerPurchaseOrder,
      text03: '',
      deliverDate: new Date().toISOString().slice(0, 10),
      portabilityDate: '',
      ...portabilityText,
      serialRequestId: shoppingCart.scID,
      datePrice: new Date().toISOString().slice(0, 10),
      initialPaymentValue: '0',
      society: 'CO15',
      ...detailPurchaseOrderList,
      ...conditionPurchaseOrderList,
    });
  }

  buildGetPedidoURL(url: string) {
    return url;
  }

  parseGetPedidoResponse(response: PedidoTemplate) {
    return this.parseResponse(response);
  }

  getPedidoMock(): Observable<PedidoModel> {
    const response = require('./pedido.json');
    return new Observable((observer) => {
      observer.next(this.parseGetPedidoResponse(response));
      observer.complete();
    });
  }

  parseResponse(response: PedidoTemplate): PedidoModel {
    return new PedidoModel(response);
  }

  obtenerHeaderPurchaseOrder(
    shoppingCart: ShoppingCartModel,
    cliente: ClienteModel,
    usuario: UsuarioModel,
    direccion: DireccionModel
  ) {
    let regionCode = '11';
    let cityName = 'cityName';
    let address = 'address';
    if (direccion) {
      regionCode = direccion.city.uperGeographycLevel.uperGeographycLevel.daneCode;
      address = direccion.igacAddress;
      cityName = direccion.city.name;
    }
    return {
      headerPurchaseOrder: {
        region: '',
        classOfSalesDocument: '',
        salesOrganizationOrcommercialRegion: 'CO03',
        distributionChannel: '11',
        sectorOrProduct: '11',
        salesOffice: 'C108',
        logisticCenter: 'C108',
        claimantOrClient: '1050000090',
        customersOrderNumber: shoppingCart.scID,
        purchaseOrderCustomerDate: new Date().toISOString().slice(0, 10),
        addressee: '1050000090',
        paymentTermsKey: 'D000',
        groupOfSellers: '001',
        typeOfPriceList: cliente.darCodigoTipoDocumento(),
        netValueInDocumentCurrency: '0',
        reasonForOrder: 'A79',
        text01: cliente.obtenerCodigoTipoPersona(),
        discountValue: '0',
        clientName: cliente.name,
        clientNit: cliente.documentNumber,
        contryCode: 'CO',
        regionCode: regionCode,
        cityName: cityName,
        neighborhoodName: '',
        email: cliente.email || 'cliente@email.com',
        networkUser: usuario.networkUser,
        networkUserName: usuario.firstName + ' ' + usuario.lastName,
        networkUserCellPhone: cliente.phoneNumber,
        address: address,
        saleZone: usuario.salePoint || 'saleZone',
        computerNumber: '',
        quotasNumber: '',
        text02: '',
        application: '',
        typeSale: '',
        typeOfPurchaseOrder: '',
        statusPurchaseOrder: '',
        purchaseOrderClass: '',
      },
    };
  }

  obtenerPortabilityText(cliente: ClienteModel) {
    return {
      portabilityText: {
        cedula: cliente.documentNumber,
        phone: '',
        neighborhood: '',
        state: '',
        city: '',
        portability: '',
        workingDay: '',
      },
    };
  }

  obtenerDetailPurchaseOrderList(shoppingCart: ShoppingCartModel, usuario: UsuarioModel) {
    let detailPurchaseOrderList: any[] = [];
    let contador = 0;
    shoppingCart.items.forEach((item) => {
      detailPurchaseOrderList[contador] = {
        positionNumber: contador + 1,
        material: '7012881',
        quantity: item.quantity,
        unitOfMeasurement: 'PZA',
        logisticCenter: 'C108',
        warehouse: '',
        conditionClass: '0',
        valueOfTheCondition: '0',
        groupOfMaterials1: '1',
        groupOfMaterials2: 'ID',
        groupOfMaterials3: 'groupOfMaterials3',
        groupOfMaterials4: '',
        groupOfMaterials5: '',
        planCode: 'SIN PROMOCION',
        packageCode: '',
        attributes: [
          {
            name: 'ID_IVA',
            value: 'OTT01',
          },
        ],
      };
      contador++;
    });

    return {
      detailPurchaseOrderList: [...detailPurchaseOrderList],
    };
  }

  obtenerConditionPurchaseOrderList(shoppingCart: ShoppingCartModel) {
    let conditionPurchaseOrderList: any[] = [];
    let conditionTempList: any[] = [];
    let contador = 0;

    shoppingCart.items.forEach((item) => {
      conditionTempList[0] = {
        positionNumber: contador + 1,
        classOfCondition: 'OT',
        valueOfCondition: '0',
        attributes: {
          name: '',
          value: '',
        },
      };

      conditionTempList[1] = {
        positionNumber: contador + 1,
        classOfCondition: 'OTT',
        valueOfCondition: '0',
        attributes: {
          name: '',
          value: '',
        },
      };

      conditionTempList[2] = {
        positionNumber: contador + 1,
        classOfCondition: 'OB',
        valueOfCondition: '0',
        attributes: {
          name: '',
          value: '',
        },
      };

      conditionPurchaseOrderList[contador] = [...conditionTempList];
      contador++;
    });

    return {
      conditionPurchaseOrderList: [...conditionPurchaseOrderList],
    };
  }
}
