import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';
import * as TiposCategoriasReducer from '~libraries/reducers/common/tipos-categorias/angular'
import { TiposCategoriasModel } from '~libraries/domain/common/tipos-categorias/tipos-categorias';



export class TiposCategoriasStoreService {
  constructor(private store: Store<TiposCategoriasReducer.ApplicationState>) {}

  // Funciones de selectores
  getTiposCategorias(): Observable<TiposCategoriasModel[]> {
    return notNullSelect(TiposCategoriasReducer.selectTiposCategorias)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarTiposCategorias() {
    this.store.dispatch(TiposCategoriasReducer.fetcTiposCategorias() );
  }
}
