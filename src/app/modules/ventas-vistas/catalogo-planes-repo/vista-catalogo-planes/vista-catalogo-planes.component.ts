import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ButtonTemplate } from '../../../../../../externals/libraries/presentation/navigation-components';

import { PlanModel } from '../../../../../../externals/libraries/domain/fullstack/catalogo';
import { RiesgohcModel } from '../../../../../../externals/libraries/domain/common/riesgoHC';
@Component({
  selector: 'app-catalogo-planes',
  templateUrl: './vista-catalogo-planes.component.html',
  styleUrls: ['./vista-catalogo-planes.component.scss'],
})
export class VistaCatalogoPlanesComponent implements OnInit {
  @Output() onNextButtonClicked: EventEmitter<null> = new EventEmitter();
  @Output() onPreviousButtonClicked: EventEmitter<any> = new EventEmitter();
  @Output() onMostrarPlan = new EventEmitter<PlanModel>();
  @Output() onAgregarPlan = new EventEmitter<PlanModel>();

  @Input() planes: PlanModel[] = [];
  @Input() matrizRiesgoHc: RiesgohcModel;

  // Visuales
  @Input() previousButton: ButtonTemplate;
  @Input() nextButton: ButtonTemplate;

  constructor() {}

  ngOnInit(): void {}

  mostrarPlan(plan: PlanModel) {
    this.onMostrarPlan.emit(plan);
  }

  agregarPlan(plan: PlanModel) {
    this.onAgregarPlan.emit(plan);
  }

  getPreviousButton(): ButtonTemplate {
    return this.previousButton;
  }

  getNextButton(): ButtonTemplate {
    return this.nextButton;
  }

  previousButtonClicked() {
    this.onPreviousButtonClicked.emit();
  }

  nextButtonClicked() {
    this.onNextButtonClicked.emit();
  }
}
