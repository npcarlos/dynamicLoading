import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface DocumentoTemplate extends EntityTemplate {
  tdo_codigo: string;
  tdo_descripcion: string;
  estado: number;
  usuarioCreacion: string;
  fechaCreacion: Date;
  usuarioActualizacion: string;
  fechaActualizacion: Date;
}

export class DocumentoModel extends EntityModel<DocumentoTemplate> implements DocumentoTemplate {
  tdo_codigo: string;
  tdo_descripcion: string;
  estado: number;
  usuarioCreacion: string;
  fechaCreacion: Date;
  usuarioActualizacion: string;
  fechaActualizacion: Date;
}
