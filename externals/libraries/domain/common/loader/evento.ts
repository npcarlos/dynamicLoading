export class EventoModel {
  private _source: string;
  private _name: string;
  private _timestamp: number;

  constructor(source: string, name: string, timestamp: number = null) {
    this._source = source;
    this._name = name;
    this._timestamp = timestamp || new Date().getTime();
  }

  get source() {
    return this._source;
  }
  get name() {
    return this._name;
  }
  get timestamp() {
    return this._timestamp;
  }

  esMismo(evento: EventoModel) {
    return this.source === evento.source && this._name === evento._name && this._timestamp === evento._timestamp;
  }
}
