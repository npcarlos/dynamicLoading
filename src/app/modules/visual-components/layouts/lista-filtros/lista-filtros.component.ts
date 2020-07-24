import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { ItemTemplate } from '../../elementos/item.interface';
import { ItemDirective } from '../../elementos/item.directive';


@Component({
  selector: 'app-lista-filtros',
  templateUrl: './lista-filtros.component.html',
  styleUrls: ['./lista-filtros.component.scss']
})
export class ListaFiltrosComponent implements OnInit {
  
  @Input() listaItems: any;
  @Input() visualItemRender: any;

  @Output() onMostrar = new EventEmitter<any>();
  @Output() onAgregar = new EventEmitter<any>();
  //@Input() itemsCatalogo: TipoCatalogoModel;
  //@Input() itemsCatalogoInitial: any[];
  @Input() opcionItem: string;


  public showFilters = false;
  searchText = '';
  orderByItems = '';
  tipoPlan = 'Voz y Datos';
  paginaActual: number = 1;

  @Input() itemCatalogoIndex: number;
  // public items: ItemComponent[]
  currentCatalogoIndex = 0;
  @ViewChild(ItemDirective, {static: true}) grillaHost: ItemDirective;
  interval: any;

  constructor( 
    private componentFactoryResolver: ComponentFactoryResolver 
  ) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    
    for (const item of this.listaItems) {
  
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.visualItemRender);

      const viewContainerRef = this.grillaHost.viewContainerRef;

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<ItemTemplate>componentRef.instance).data = item;
    }
    
  }
  // }

  // onBusquedaCambio() {
  //   this.paginaActual = 1;
  // }

  // mostrar(item) {
  //   this.onMostrar.emit(item);
  // }

  // agregar(item) {
  //   this.onAgregar.emit(item);
  // }

  // /*
  // * Método para mostrar el modal de los filtros
  // * 
  // */
  // public showFiltersModal(): void {
  //   this.showFilters = !this.showFilters
  // }

  // /**
  //  * Metodo para cerrar el modal de los filtros
  //  */
  // public closeFiltro(e: boolean): void {
  //   this.showFilters = e;
  // }

  // /**
  //  * Metodo para asignar el nuevo arrego filtrado
  //  * @param itemsFiltrados Array deL modelo de catalogo conn los filtros aplicados
  //  */
  // public getFilterCatalogo (itemsFiltrados) {
  //   this.itemsCatalogo = itemsFiltrados;
  // }
}
