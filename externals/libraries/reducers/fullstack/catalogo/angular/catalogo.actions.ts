import { createAction, props, ActionCreator } from '@ngrx/store';

import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import { EquipoModel, TecnologiaModel, PlanModel } from '~libraries/domain/fullstack/catalogo';

import {
  ACTUALIZAR_CATALOGO_EQUIPOS_ACTION,
  ACTUALIZAR_CATALOGO_PLANES_ACTION,
  ACTUALIZAR_CATALOGO_TECNOLOGIA_ACTION,
  ACTUALIZAR_CATALOGO_EQUIPO_ACTION,
  SELECCIONAR_EQUIPO_ACTION,
  SELECCIONAR_PLAN_ACTION,
  SELECCIONAR_TECNOLOGIA_ACTION,
  FETCH_CATALOGO_EQUIPOS_ACTION,
  FETCH_CATALOGO_PLANES_ACTION,
  FETCH_CATALOGO_TECNOLOGIA_ACTION,
  FETCH_EQUIPOS_CATALOGO_ACTION,
  FETCH_PLAN_CATALOGO_ACTION,
  FETCH_TECNOLOGIA_CATALOGO_ACTION,
} from '../core/catalogo.constants';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarCatalogoEquipos = createAction(
  ACTUALIZAR_CATALOGO_EQUIPOS_ACTION,
  props<{ equipos: EquipoModel[] }>()
);
export const actualizarCatalogoPlanes = createAction(
  ACTUALIZAR_CATALOGO_PLANES_ACTION,
  props<{ planes: PlanModel[] }>()
);

export const actualizarCatalogoTecnologia = createAction(
  ACTUALIZAR_CATALOGO_TECNOLOGIA_ACTION,
  props<{ tecnologias: TecnologiaModel[] }>()
);
export const actualizarCatalogoEquipo = createAction(
  ACTUALIZAR_CATALOGO_EQUIPO_ACTION,
  props<{ equipos: EquipoModel }>()
);

export const seleccionarEquipoCatalogo = createAction(SELECCIONAR_EQUIPO_ACTION, props<{ equipo: EquipoModel }>());
export const seleccionarPlanCatalogo = createAction(SELECCIONAR_PLAN_ACTION, props<{ plan: PlanModel }>());
export const seleccionarTecnologiaCatalogo = createAction(
  SELECCIONAR_TECNOLOGIA_ACTION,
  props<{ tecnologia: TecnologiaModel }>()
);

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchCatalogoEquipos = createAction(
  FETCH_CATALOGO_EQUIPOS_ACTION,
  props<{ atributosContextoCliente: AtributosContextoClienteModel }>()
);
export const fetchCatalogoPlanes = createAction(
  FETCH_CATALOGO_PLANES_ACTION,
  props<{ atributosContextoCliente: AtributosContextoClienteModel }>()
);
export const fetchCatalogoTecnologias = createAction(
  FETCH_CATALOGO_TECNOLOGIA_ACTION,
  props<{ atributosContextoCliente: AtributosContextoClienteModel }>()
);

export const fetchEquipoSeleccionado = createAction(FETCH_EQUIPOS_CATALOGO_ACTION, props<{ categoriaValor: string }>());
export const fetchPlanSeleccionado = createAction(FETCH_PLAN_CATALOGO_ACTION, props<{ categoriaValor: string }>());
export const fetchTecnologiaSeleccionada = createAction(
  FETCH_TECNOLOGIA_CATALOGO_ACTION,
  props<{ categoriaValor: string }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_CATALOGO_EQUIPOS_ACTION]: actualizarCatalogoEquipos,
  [ACTUALIZAR_CATALOGO_PLANES_ACTION]: actualizarCatalogoPlanes,
  [ACTUALIZAR_CATALOGO_TECNOLOGIA_ACTION]: actualizarCatalogoTecnologia,

  [ACTUALIZAR_CATALOGO_EQUIPO_ACTION]: actualizarCatalogoEquipo,

  [SELECCIONAR_EQUIPO_ACTION]: seleccionarEquipoCatalogo,
  [SELECCIONAR_PLAN_ACTION]: seleccionarPlanCatalogo,
  [SELECCIONAR_TECNOLOGIA_ACTION]: seleccionarTecnologiaCatalogo,

  [FETCH_CATALOGO_EQUIPOS_ACTION]: fetchCatalogoEquipos,
  [FETCH_CATALOGO_PLANES_ACTION]: fetchCatalogoPlanes,
  [FETCH_CATALOGO_TECNOLOGIA_ACTION]: fetchCatalogoTecnologias,

  [FETCH_EQUIPOS_CATALOGO_ACTION]: fetchEquipoSeleccionado,
  [FETCH_PLAN_CATALOGO_ACTION]: fetchPlanSeleccionado,
  [FETCH_TECNOLOGIA_CATALOGO_ACTION]: fetchTecnologiaSeleccionada,
};
