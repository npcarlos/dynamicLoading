import { PoModel } from '~libraries/domain/fullstack/order-negotiator';
import { SerialModel } from '../serial';

export class Activacion {
  private _serial: SerialModel;
  esActivo: boolean = false;

  constructor(producto: PoModel, serial: string) {
    this._serial = new SerialModel(producto, serial);
    this.esActivo = false;
  }

  get serial() {
    return this._serial;
  }

  activar() {
    this.esActivo = true;
  }
}
