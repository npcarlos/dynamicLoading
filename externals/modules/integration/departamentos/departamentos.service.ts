import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DepartamentosModel } from '~libraries/domain/common/departamentos';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class DepartamentosIntegrationService {
  constructor() {}

  fetchDepartamentos() {
    const departamentos = require('./departamentos.json');
    return new Observable<DepartamentosModel[]>((subscriber) => subscriber.next(departamentos));
  }
}
