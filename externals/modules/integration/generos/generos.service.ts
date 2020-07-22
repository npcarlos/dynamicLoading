import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GenerosModel } from '~libraries/domain/common/generos';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class GenerosIntegrationService {
  constructor() {}

  fetchGeneros() {
    const generos = require('./generos.json');
    return new Observable<GenerosModel[]>((subscriber) => subscriber.next(generos));
  }
}
