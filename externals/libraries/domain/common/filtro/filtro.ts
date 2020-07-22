import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface PropiedadTemplate extends EntityTemplate {
  nombre: string;
  cantidad: number;
}

export interface FiltroTemplate extends EntityTemplate {
  nombre: string;
  propiedades: PropiedadTemplate[];
}

export class FiltroModel extends EntityModel<FiltroTemplate> implements FiltroTemplate {
  nombre: string;
  propiedades: PropiedadTemplate[];
}
