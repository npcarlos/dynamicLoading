import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { ItemComponent } from '../item';
import { ItemTemplate } from '../item.interface';
import { ItemDirective } from '../item.directive';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {

  @Output() onMostrar = new EventEmitter<any>();
  @Output() onAgregar = new EventEmitter<any>();
  @Input() itemsCatalogo: any[];
  @Input() itemsCatalogoInitial: any[];
  @Input() opcionItem: string;

  public showFilters = false;
  searchText = '';
  orderByItems = '';
  tipoPlan = 'Voz y Datos';
  paginaActual: number = 1;

  @Input() itemIndex: number;
  public items: ItemComponent[]
  currentCatalogoIndex = 0;
  @ViewChild(ItemDirective, {static: true}) grillaHost: ItemDirective;
  interval: any;

  constructor( 
    private itemService: ItemService,
    private componentFactoryResolver: ComponentFactoryResolver 
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
    this.loadComponent();
  }

  loadComponent() {
    const catalogoItem = this.items[this.itemIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(catalogoItem.component);

    const viewContainerRef = this.grillaHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ItemTemplate>componentRef.instance).data = catalogoItem.data;
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