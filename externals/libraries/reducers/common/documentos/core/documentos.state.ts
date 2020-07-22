import { DocumentoModel } from '~libraries/domain/common/documentos';

export interface DocumentosState {
  documentos: DocumentoModel[];
}

export interface ReducerDocumentosState extends DocumentosState {}
