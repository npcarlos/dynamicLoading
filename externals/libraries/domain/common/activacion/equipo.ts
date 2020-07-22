import { SerialModel } from '../serial';
import { Activacion } from './base';
import { ActivacionPlan } from './plan';

export class ActivacionEquipo extends Activacion {
  activacionPlan?: ActivacionPlan;

  activar() {
    if (this.activacionPlan) {
      this.activacionPlan.activar();
    }
    super.activar();
  }
}
