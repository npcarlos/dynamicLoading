import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EstadoCivilModel } from '~libraries/domain/common/estado-civil';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class EstadoCivilIntegrationService {
  constructor() {}

  fetchEstadoCivil() {
    const estadoCivil = require('./estado-civil.json');
    return new Observable<EstadoCivilModel[]>((subscriber) => subscriber.next(estadoCivil));
  }
}
