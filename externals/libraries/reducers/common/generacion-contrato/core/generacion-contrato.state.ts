import { GeneracionContratoModel } from '~libraries/domain/common/generacion-contrato';

export interface LegalizacionState {
  legalizacion: GeneracionContratoModel;
}

export interface DocumentoState {
  documento: GeneracionContratoModel;
}

export interface ContratoState {
  contrato: GeneracionContratoModel;
}

export interface ReducerGeneracionContratoState extends LegalizacionState, DocumentoState, ContratoState {}
