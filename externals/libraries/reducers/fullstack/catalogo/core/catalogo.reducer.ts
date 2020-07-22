import { Map } from 'immutable';
import { ReducerCatalogoState } from './catalogo.state';
import {
  ACTUALIZAR_CATALOGO_EQUIPOS_ACTION,
  ACTUALIZAR_CATALOGO_PLANES_ACTION,
  ACTUALIZAR_CATALOGO_TECNOLOGIA_ACTION,
  SELECCIONAR_EQUIPO_ACTION,
  SELECCIONAR_PLAN_ACTION,
  SELECCIONAR_TECNOLOGIA_ACTION,
  ACTUALIZAR_CATALOGO_EQUIPO_ACTION,
} from './catalogo.constants';
import { EquipoModel, TecnologiaModel, PlanModel } from '~libraries/domain/fullstack/catalogo';

const initialStateValue: ReducerCatalogoState = {
  equipos: [],
  planes: [],
  tecnologias: [],
  equipo: null,
  equipoSeleccionado: null,
  planSeleccionado: null,
  tecnologiaSeleccionada: null,
};

export const initialState = Map({
  ...initialStateValue,
});

export const reducerObject: { [action: string]: (store: Map<string, any>, action: any) => Map<string, any> } = {
  [ACTUALIZAR_CATALOGO_EQUIPOS_ACTION]: (store: Map<string, any>, action: { equipos: EquipoModel[] }) =>
    store.set('equipos', action.equipos),
  [ACTUALIZAR_CATALOGO_PLANES_ACTION]: (store: Map<string, any>, action: { planes: PlanModel[] }) =>
    store.set('planes', action.planes),
  [ACTUALIZAR_CATALOGO_TECNOLOGIA_ACTION]: (store: Map<string, any>, action: { tecnologias: TecnologiaModel[] }) =>
    store.set('tecnologias', action.tecnologias),

  //prueba para traer objeto unico de equipo
  [ACTUALIZAR_CATALOGO_EQUIPO_ACTION]: (store: Map<string, any>, action: { equipo: EquipoModel }) =>
    store.set('equipo', action.equipo),

  // Selección de items
  [SELECCIONAR_EQUIPO_ACTION]: (store: Map<string, any>, action: { equipo: EquipoModel }) =>
    store.set('equipoSeleccionado', action.equipo),
  [SELECCIONAR_PLAN_ACTION]: (store: Map<string, any>, action: { plan: PlanModel }) =>
    store.set('planSeleccionado', action.plan),
  [SELECCIONAR_TECNOLOGIA_ACTION]: (store: Map<string, any>, action: { tecnologia: TecnologiaModel }) =>
    store.set('tecnologiaSeleccionada', action.tecnologia),
};
