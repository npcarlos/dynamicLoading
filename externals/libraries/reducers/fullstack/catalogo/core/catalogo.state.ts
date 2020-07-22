import { EquipoModel, TecnologiaModel, PlanModel } from '~libraries/domain/fullstack/catalogo';

export interface CatalogoEquiposState {
  equipos: EquipoModel[];
}

export interface CatalogoPlanesState {
  planes: PlanModel[];
}

export interface CatalogoTecnologiaState {
  tecnologias: TecnologiaModel[];
}

export interface CatalogoEquipoState {
  equipo: EquipoModel;
}
export interface CatalogoEquipoSeleccionadoState {
  equipoSeleccionado: EquipoModel;
}

export interface CatalogoPlanSeleccionadoState {
  planSeleccionado: PlanModel;
}

export interface CatalogoTecnologiaSeleccionadaState {
  tecnologiaSeleccionada: TecnologiaModel;
}

export interface ReducerCatalogoState
  extends CatalogoEquiposState,
    CatalogoPlanesState,
    CatalogoTecnologiaState,
    CatalogoEquipoState,
    CatalogoEquipoSeleccionadoState,
    CatalogoPlanSeleccionadoState,
    CatalogoTecnologiaSeleccionadaState {}
