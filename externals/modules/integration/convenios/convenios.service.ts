import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConvenioModel } from '~libraries/domain/common/convenios';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class ConveniosIntegrationService {
  constructor() {}

  fetchConvenios() {
    const convenios = require('./convenios.json');
    return new Observable<ConvenioModel[]>((subscriber) => subscriber.next(convenios));
  }
}
