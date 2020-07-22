import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { NavigationService } from '~modules/presentation/navigation';
//import { ChildNavigationComponentBase } from '~libraries/presentation/navigation-components';

import { CatalogoStoreService } from '../../../../../../externals/modules/business/catalogo-store';
//import { MatrizRiesgoStoreService } from '../../../../../../externals/modules/business/matriz-riesgo-store';
//import { OrderNegotiatorStoreService } from '~modules/business/order-negotiator-services-store';

//import { UsuarioModel } from '~libraries/domain/common/usuario';
//import { ClienteModel } from '~libraries/domain/common/cliente';
//import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
//import { RiesgohcModel } from '~libraries/domain/common/riesgoHC';

import { PlanModel } from '../../../../../../externals/libraries/domain/fullstack/catalogo';
//import { ShoppingCartPlanModel } from '~libraries/domain/fullstack/shopping-cart';
//import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';

declare var $: any;

@Component({
  selector: 'app-routing-catalogo-planes',
  templateUrl: './catalogo-planes.component.html',
  styleUrls: ['./catalogo-planes.component.scss'],
})
export class CatalogoPlanesComponent  implements OnInit {
  
  // usuario: UsuarioModel;
  // cliente: ClienteModel;
  // shoppingCart: ShoppingCartModel;
  // atributosContextoCliente: AtributosContextoClienteModel;
  // matrizRiesgo: RiesgohcModel;

  planes: PlanModel[];
  // planSeleccionado: ShoppingCartPlanModel;
  modalPlanSeleccionado: any;

  constructor(
    // protected navigationService: NavigationService,
    protected activatedRoute: ActivatedRoute,
    private catalogoStoreService: CatalogoStoreService,
    // private orderNegotiatorService: OrderNegotiatorStoreService,
    // private matrizRiesgoStoreService: MatrizRiesgoStoreService
  ) {
    //super(activatedRoute);
    console.log("CREANDO CATALOGO-PLANES.COMPONENT.TS")
  }

  ngOnInit(): void {

    // this.activatedRoute.data.subscribe(
    //   (data: {
    //     // usuario: UsuarioModel;
    //     // cliente: ClienteModel;
    //     // shoppingCart: ShoppingCartModel;
    //     // atributosContextoCliente: AtributosContextoClienteModel;
    //   }) => {
    //     // this.usuario = data.usuario;
    //     // this.cliente = data.cliente;
    //     // this.shoppingCart = data.shoppingCart;
    //     // this.atributosContextoCliente = data.atributosContextoCliente;

    //     // this.catalogoStoreService.solicitarCatalogoPlanes(this.atributosContextoCliente);
    //     // this.matrizRiesgoStoreService.solicitarMatrizRiesgo(this.cliente, this.usuario);
    //   }
    // );

    // this.orderNegotiatorService.getShoppingCart().subscribe((shoppingCart) => {
      // this.shoppingCart = shoppingCart;
    // });

    this.catalogoStoreService.getPlanesCatalogo().subscribe((planes) => (this.planes = planes));
    // this.catalogoStoreService.getPlanSeleccionado().subscribe((plan) => {
    //   this.planSeleccionado = new ShoppingCartPlanModel(plan, 1);
    //   $(this.modalPlanSeleccionado).modal('show');
    // });
    // this.matrizRiesgoStoreService.getRiesgoHC().subscribe((matrizRiesgo) => (this.matrizRiesgo = matrizRiesgo));
  }

  mostrarDetallesPlan(modal, plan: PlanModel) {
    if (plan) {
      this.modalPlanSeleccionado = modal;
      this.catalogoStoreService.solicitarPlanSeleccionado(plan.id);
    }
  }

  // agregarCarritoPlan(modal, plan: PlanModel) {
  //   if (plan) {
  //     this.planSeleccionado = new ShoppingCartPlanModel(plan, 1);
  //     this.orderNegotiatorService.agregarItemPlanShoppingCart(this.shoppingCart, this.planSeleccionado);
  //   }
  // }

  // confirmarAgregarCarritoPlan(plan: ShoppingCartPlanModel) {
  //   this.orderNegotiatorService.agregarItemPlanShoppingCart(this.shoppingCart, plan);
  //   if (this.modalPlanSeleccionado) {
  //     $(this.modalPlanSeleccionado).modal('hide');
  //   }
  // }

  // agregarCarritoModal(cantidad: number) {
  //   if (this.planSeleccionado) {
  //     this.planSeleccionado.cantidad = cantidad;
  //     this.orderNegotiatorService.agregarItemPlanShoppingCart(this.shoppingCart, this.planSeleccionado);
  //     $(this.modalPlanSeleccionado).modal('hide');
  //   }
  // }
}
