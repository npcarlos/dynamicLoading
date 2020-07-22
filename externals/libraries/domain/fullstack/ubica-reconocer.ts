import { EntityTemplate, EntityModel } from '~libraries/domain/base';

/**
 * Clase modelo creada a partir del objeto response Json del serivicio
 * http://100.126.21.189:7777/UbicaReconocer/V1.0/Rest/ del metodo GET
 * getInformacion
 *
 * realizado por: Johan Canon
 * Fecha: 8-06-2020
 */

export interface TelefonosTemplate {
  ciudad: string;
  numeroReportes: number;
  primerReporte: string;
  telefono: number;
  tipo: string;
  ultimoReporte: string;
}

export interface CelularTemplate {
  celular: number;
  numeroReportes: number;
  primerReporte: string;
  ultimoReporte: string;
}

export interface IdentificacionTemplate {
  estado: string;
  fechaExpedicion: string;
  lugarExpedicion: string;
}

export interface InformacionTemplate {
  nombreCompleto: string;
  nombres: string;
  numeroDocumento: number;
  primerApellido: string;
  rangoEdad: string;
  rut: string;
  segundoApellido: string;
  tipoDocumento: number;
  validada: string;
}

export interface FaultTemplate {
  codigoRespuesta: number;
  mensajeRespuesta: string;
}

export interface DireccionesTemplate {
  ciudad: string;
  codigoDepto: number;
  codigoPais: string;
  direccion: string;
  nombreDepto: string;
  numeroReportes: number;
  primerReporte: string;
  tipo: string;
  ultimoReporte: string;
  zona: string;
}

export interface UbicaReconocerTemplate extends EntityTemplate {
  celulares: CelularTemplate[];
  codigoRespuesta: number;
  codigoTransaccion: number;
  direcciones: DireccionesTemplate[];
  entidadConsultada: string;
  fault: FaultTemplate;
  fechaConsulta: string;
  identificacion: IdentificacionTemplate[];
  informacion: InformacionTemplate[];
  telefonos: TelefonosTemplate[];
}

export class UbicaReconocerModel extends EntityModel<UbicaReconocerTemplate> implements UbicaReconocerTemplate {
  celulares: CelularTemplate[];
  codigoRespuesta: number;
  codigoTransaccion: number;
  direcciones: DireccionesTemplate[];
  entidadConsultada: string;
  fault: FaultTemplate;
  fechaConsulta: string;
  identificacion: IdentificacionTemplate[];
  informacion: InformacionTemplate[];
  telefonos: TelefonosTemplate[];
}
