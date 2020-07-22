import { CatalogoTemplate, CatalogoModel } from './catalogo';

export interface TecnologiaTemplate extends CatalogoTemplate {
  color1: string;
  color2?: string;
  tipo: string;
}

export class TecnologiaModel extends CatalogoModel implements TecnologiaTemplate {
  color1: string;
  color2?: string;
  tipo: string;
  caracteristicas: string[] = [
    'GarantiaDiasFabricante',
    'GarantiaDiasClaro',
    'CodigoMaterial',
    'isComposite',
    'productTechnicalType',
    'specificationSubtype',
    'specificationSubSubtype',
    'family',
    'category',
    'shared',
    'tariffTimeTimeZoneType',
  ];

  darInformacion() {
    return this.specificationCharacteristics.filter((especificacion: any) => {
      const especificacionVisible = this.caracteristicas.find((caracteristica: any) => {
        return especificacion.id === caracteristica;
      });
      return !especificacionVisible;
    });
  }
}
