import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ConvenioTemplate extends EntityTemplate {
  convenioCodigo: string;
  convenioDescripcion: string;
  estado: number;
  usuarioCreacion: string;
  fechaCreacion: Date;
  usuarioActualizacion: string;
  fechaActualizacion: Date;
}

export class ConvenioModel extends EntityModel<ConvenioTemplate> implements ConvenioTemplate {
  convenioCodigo: string;
  convenioDescripcion: string;
  estado: number;
  usuarioCreacion: string;
  fechaCreacion: Date;
  usuarioActualizacion: string;
  fechaActualizacion: Date;
}
