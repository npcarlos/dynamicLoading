import { EntityTemplate, EntityModel } from '../../base';

export interface CatalogoTemplate extends EntityTemplate {
  name: string;
  description: String;
  amount: number;
  taxes: number;
  image: string;

  characteristics: any[];
  configurableCharacteristics: any[];
  specificationCharacteristics: any[];
  specificationAssociations: any[];

  versions?: any[];
}

export interface CatalogoResponseTemplate {
  headerResponse: any;
  getProductOfferingResponse: CatalogoTemplate[];
}

export class CatalogoModel extends EntityModel<CatalogoTemplate> implements CatalogoTemplate {
  name: string;
  description: String;
  amount: number;
  taxes: number;
  image: string;

  characteristics: any[];
  configurableCharacteristics: any[];
  specificationCharacteristics: any[];
  specificationAssociations: any[];

  asociaciones: any[];

  caracteristicas: string[] = [];
  caracteristicasConfigurables: string[] = [];

  darInformacion() {
    return this.caracteristicas
      .map((nombreCaracteristica: string) => {
        const caracteristica = this.specificationCharacteristics.find((caracteristica: any) => {
          return caracteristica.id === nombreCaracteristica;
        });
        return caracteristica;
      })
      .filter((caracteristica: any) => !!caracteristica);
  }

  darInformacionConfigurable() {
    return this.caracteristicasConfigurables
      .map((nombreCaracteristica: string) => {
        const caracteristica = this.configurableCharacteristics.find((caracteristica: any) => {
          return caracteristica.id === nombreCaracteristica;
        });
        return caracteristica;
      })
      .filter((caracteristica: any) => !!caracteristica);
  }

  darTipo() {
    return this.characteristics
      .find((caracteristica) => caracteristica.id === 'specificationSubtype')
      .value.toLowerCase();
  }

  darGama() {
    return this.characteristics.find((caracteristica) => caracteristica.id === 'Gama').value?.toLowerCase();
  }

  darCaracteristica(nombreCaracteristica: string) {
    return this.specificationCharacteristics.find((caracteristica) => caracteristica.id === nombreCaracteristica);
  }

  darInformacionAsociaciones(associationType: string) {
    return this.specificationAssociations.filter((word) => word.associationType == associationType);
  }

  darCodigoMaterial() {
    const valor = this.characteristics.find((characteristic) => characteristic.id === 'CodigoMaterial');
    return valor ? valor.value : null;
  }

  darPrecio() {
    return this.amount;
  }

  darImpuestos() {
    return this.taxes;
  }

  darAntesDeImpuestos() {
    return this.amount - this.taxes;
  }
}
