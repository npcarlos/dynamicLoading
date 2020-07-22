import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface RiesgohcHistoria {
  ciudad: string;
  clasificacionServicio: string;
  clasificacionTecnologia: string;
  estadoIdentificacion: string;
  fechaExpedicion: string;
  nombres: string;
  numeroDigitado: string;
  primerApellido: string;
  puntaje: string;
  respuesta: string;
  score: string;
  segundoApellido: string;
  tipoIdDigitado: string;
}

export interface RiesgohcEquipos {
  calificacion: string;
  cantidadEquipos: string;
  cupoCredito: string;
  id: Number;
  pagoinicial12: string;
  pagoinicial18: string;
  pagoinicial24: string;
  pagoinicial6: string;
  region: string;
}

export interface RiesgohcHogares {
  aplicaCmfAdelantado: string;
  calificacion: string;
  cantidadServicios: string;
  dth: string;
  duoPlay: string;
  id: Number;
  internet: string;
  multiPlay: string;
  numeroCmfAdelantado: string;
  pvr: string;
  region: string;
  telefoniaFija: string;
  triplePlay: string;
  tv: string;
}

export interface RiesgohcPersonas {
  aplicaCMF: string;
  calificacion: string;
  cantidadLineasAlta: string;
  cantidadLineasBaja: string;
  cantidadLineasMax: string;
  cantidadLineasMedia: string;
  id: Number;
  numeroCMF: string;
  region: string;
  tipoPlan: string;
}
export interface RiesgohcTemplate extends EntityTemplate {
  historia: RiesgohcHistoria;
  equipos: RiesgohcEquipos;
  hogares: RiesgohcHogares;
  personas: RiesgohcPersonas;
}

export class RiesgohcModel extends EntityModel<RiesgohcTemplate> implements RiesgohcTemplate {
  historia: RiesgohcHistoria;
  equipos: RiesgohcEquipos;
  hogares: RiesgohcHogares;
  personas: RiesgohcPersonas;
}
