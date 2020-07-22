import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class TiposCategoriasIntegrationService {
  constructor() {}

  fetchTiposCategorias() {
    const tiposCategorias = require('./tipos-categorias.json');
    return new Observable<TiposCategoriasModel[]>((subscriber) => subscriber.next(tiposCategorias));
  }
}
