import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemTemplate } from '../item.interface';

@Component({
  selector: 'app-item-plan',
  templateUrl: './item-plan.component.html',
  styleUrls: ['./item-plan.component.scss'],
})
export class ItemPlanComponent implements ItemTemplate {
  public data: any;
  @Output() onMostrar = new EventEmitter<null>();
  @Output() onAgregar = new EventEmitter<null>();
  @Input() datosMoviles: string;
  @Input() nombrePlan: string;
  @Input() precioPlan: any;
  @Input() mensajesPlan: string;
  @Input() minutosPlan: string;

  constructor() {}
  searchText = '';
  orderByItems = '';
  paginaActual: number = 1;

  ngOnInit(): void {}
  mostrar() {
    this.onMostrar.emit();
  }
  agregar() {
    this.onAgregar.emit();
  }
}
