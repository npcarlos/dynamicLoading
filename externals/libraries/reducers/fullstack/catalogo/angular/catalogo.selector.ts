import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { EquipoModel, TecnologiaModel, PlanModel } from '../../../../../libraries/domain/fullstack/catalogo';
import {
  ReducerCatalogoState,
  CatalogoEquiposState,
  CatalogoTecnologiaState,
  CatalogoPlanesState,
  CatalogoEquipoState,
  CatalogoEquipoSeleccionadoState,
  CatalogoTecnologiaSeleccionadaState,
  CatalogoPlanSeleccionadoState,
} from '../core/catalogo.state';

export interface ApplicationState {
  catalogo: Map<string, any>;
}

const selectCatalogoFeature = (state: ApplicationState): ReducerCatalogoState =>
  <ReducerCatalogoState>state.catalogo.toJS();

// Catálogos completos
const selectCatalogoEquiposData = (state: CatalogoEquiposState): EquipoModel[] => state.equipos;
const selectCatalogoPlanesData = (state: CatalogoPlanesState): PlanModel[] => state.planes;
const selectCatalogoTecnologiasData = (state: CatalogoTecnologiaState): TecnologiaModel[] => state.tecnologias;

// Pruebas
const selectCatalogoEquipoData = (state: CatalogoEquipoState): EquipoModel => state.equipo;

// Items seleccionados
const selectCatalogoEquiposAsociacionesData = (state: CatalogoEquipoSeleccionadoState): EquipoModel =>
  state.equipoSeleccionado;
const selectCatalogoPlanesAsociacionesData = (state: CatalogoPlanSeleccionadoState): PlanModel =>
  state.planSeleccionado;
const selectCatalogoTecnologiasAsociacionesData = (state: CatalogoTecnologiaSeleccionadaState): TecnologiaModel =>
  state.tecnologiaSeleccionada;

//
export const selectCatalogoEquipos = createSelector(selectCatalogoFeature, selectCatalogoEquiposData);
export const selectCatalogoPlanes = createSelector(selectCatalogoFeature, selectCatalogoPlanesData);
export const selectCatalogoTecnologias = createSelector(selectCatalogoFeature, selectCatalogoTecnologiasData);
export const selectCatalogoEquipo = createSelector(selectCatalogoFeature, selectCatalogoEquipoData);

export const selectCatalogoEquiposAsociaciones = createSelector(
  selectCatalogoFeature,
  selectCatalogoEquiposAsociacionesData
);
export const selectCatalogoPlanesAsociaciones = createSelector(
  selectCatalogoFeature,
  selectCatalogoPlanesAsociacionesData
);
export const selectCatalogoTecnologiasAsociaciones = createSelector(
  selectCatalogoFeature,
  selectCatalogoTecnologiasAsociacionesData
);
