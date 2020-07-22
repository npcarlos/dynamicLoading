import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoNumeroModel } from '~libraries/domain/common/tipo-numero';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class TipoNumeroIntegrationService {
  constructor() {}

  fetchTipoNumero() {
    const tipoNumero = require('./tipo-numero.json');
    return new Observable<TipoNumeroModel[]>((subscriber) => subscriber.next(tipoNumero));
  }
}
