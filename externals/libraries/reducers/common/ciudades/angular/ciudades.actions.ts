import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_CIUDADES_ACTION, FETCH_CIUDADES_ACTION } from '../core/ciudades.constants';
import { CiudadesModel, Municipios } from '~libraries/domain/common/ciudades';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarCiudades = createAction(ACTUALIZAR_CIUDADES_ACTION, props<{ ciudades: Municipios[] }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchCiudades = createAction(FETCH_CIUDADES_ACTION, props<{ codigoDaneDepartamento: string }>());

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_CIUDADES_ACTION]: actualizarCiudades,

  [FETCH_CIUDADES_ACTION]: fetchCiudades,
};
