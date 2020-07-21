import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-equipo',
  templateUrl: './item-equipo.component.html',
  styleUrls: ['./item-equipo.component.scss'],
})
export class ItemEquipoComponent implements OnInit {
  @Output() onMostrar = new EventEmitter<null>();
  @Output() onAgregar = new EventEmitter<null>();
  @Input() valor: string;
  constructor() {}
  searchText = '';
  orderByItems = '';
  paginaActual: number = 1;

  @Input() name: string;
  @Input() image: string;

  ngOnInit(): void {}

  mostrar() {
    this.onMostrar.emit();
  }
  agregar() {
    this.onAgregar.emit();
  }
}
