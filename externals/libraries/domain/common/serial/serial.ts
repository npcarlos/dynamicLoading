import { PoTemplate, PoModel } from '~libraries/domain/fullstack/order-negotiator';

export class SerialModel {
  private _producto: PoModel;
  private _serial: string;

  constructor(producto: PoModel, serial: string) {
    this._producto = producto;
    this._serial = serial;
  }

  get producto() {
    return this._producto;
  }

  get serial() {
    return this._serial;
  }
}
