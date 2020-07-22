import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '../../../libraries/resources/redux/selector';

import { AtributosContextoClienteModel } from '../../../libraries/domain/fullstack/atributos-contexto-cliente';
import { EquipoModel, TecnologiaModel, PlanModel } from '../../../libraries/domain/fullstack/catalogo';

import * as CatalogoReducer from '../../../libraries/reducers/fullstack/catalogo/angular';

@Injectable({
  providedIn: 'root',
})
export class CatalogoStoreService {
  constructor(private store: Store<CatalogoReducer.ApplicationState>) {}

  // Funciones de selectores
  getEquiposCatalogo(): Observable<EquipoModel[]> {
    return notNullSelect(CatalogoReducer.selectCatalogoEquipos)(this.store);
  }

  getPlanesCatalogo(): Observable<PlanModel[]> {
    return notNullSelect(CatalogoReducer.selectCatalogoPlanes)(this.store);
  }

  getTecnologiasCatalogo(): Observable<TecnologiaModel[]> {
    return notNullSelect(CatalogoReducer.selectCatalogoTecnologias)(this.store);
  }

  // Servicios seleccionados
  getEquipoSeleccionado(): Observable<EquipoModel> {
    return notNullSelect(CatalogoReducer.selectCatalogoEquiposAsociaciones)(this.store);
  }

  getPlanSeleccionado(): Observable<PlanModel> {
    return notNullSelect(CatalogoReducer.selectCatalogoPlanesAsociaciones)(this.store);
  }

  getTecnologiaSeleccionada(): Observable<TecnologiaModel> {
    return notNullSelect(CatalogoReducer.selectCatalogoTecnologiasAsociaciones)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  solicitarCatalogoEquipos(atributosContextoCliente: AtributosContextoClienteModel) {
    this.store.dispatch(CatalogoReducer.fetchCatalogoEquipos({ atributosContextoCliente }));
  }

  solicitarCatalogoPlanes(atributosContextoCliente: AtributosContextoClienteModel) {
    this.store.dispatch(CatalogoReducer.fetchCatalogoPlanes({ atributosContextoCliente }));
  }

  solicitarCatalogoTecnologias(atributosContextoCliente: AtributosContextoClienteModel) {
    this.store.dispatch(CatalogoReducer.fetchCatalogoTecnologias({ atributosContextoCliente }));
  }

  // Fetch items seleccionados
  solicitarEquipoSeleccionado(categoriaValor: string) {
    this.store.dispatch(CatalogoReducer.fetchEquipoSeleccionado({ categoriaValor }));
  }

  solicitarPlanSeleccionado(categoriaValor: string) {
    this.store.dispatch(CatalogoReducer.fetchPlanSeleccionado({ categoriaValor }));
  }

  solicitarTecnologiaSeleccionada(categoriaValor: string) {
    this.store.dispatch(CatalogoReducer.fetchTecnologiaSeleccionada({ categoriaValor }));
  }
}
