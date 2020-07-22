import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemTemplate } from '../item.interface';

@Component({
  selector: 'app-item-equipo',
  templateUrl: './item-equipo.component.html',
  styleUrls: ['./item-equipo.component.scss'],
})
export class ItemEquipoComponent implements ItemTemplate {
  // @Output() onMostrar = new EventEmitter<null>();
  // @Output() onAgregar = new EventEmitter<null>();
  // @Input() valor: string;
  // @Input() name: string;
  // @Input() image: string;
  public data: any;
  // searchText = '';
  // orderByItems = '';
  // paginaActual: number = 1;

  

  constructor() {}

  ngOnInit(): void {}

  // mostrar() {
  //   this.onMostrar.emit();
  // }
  // agregar() {
  //   this.onAgregar.emit();
  // }
}
