import { Injectable } from '@angular/core';

import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { EntityTemplate, EntityModel } from '~libraries/domain/base';

import { CatalogoResponseTemplate, CatalogoModel } from '~libraries/domain/fullstack/catalogo';
import { AtributosContextoClienteModel } from '~libraries/domain/fullstack/atributos-contexto-cliente';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var require: any;
@Injectable({
  providedIn: 'root',
})
export abstract class CatalogoBaseIntegrationService<
  T extends EntityTemplate,
  M extends EntityModel<T>
> extends RestServiceTemplate<T, M> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.fullstack.catalogo');
  }

  // Consulta del catálogo
  public fetchCatalogo(
    categoriaNombre: string,
    categoriaValor: string,
    atributosContextoCliente?: AtributosContextoClienteModel
  ) {
    const query = this.restIntegrationService.settings.getConfiguration(`${this.alias}.header`);
    let headers = null;
    if (atributosContextoCliente) {
      headers = this.generarAtributosContextoCliente(atributosContextoCliente);
    }
    return this.restIntegrationService.get(
      this,
      'getCatalogo',
      {
        ...query,
        [categoriaNombre]: categoriaValor,
      },
      {
        categoriaNombre,
        categoriaValor,
      },
      {
        headers,
      }
    );
  }

  // Consulta individual
  fetchCatalogoItemPorId(categoriaValor: string, atributosContextoCliente?: AtributosContextoClienteModel) {
    return this.fetchCatalogo('id', categoriaValor, atributosContextoCliente).pipe(
      map((planes: CatalogoModel[]) => {
        if (planes.length > 0) {
          return planes.shift();
        }
        return null;
      })
    );
  }

  // Las Peticiones
  getCatalogoMock(...requestParams: any[]) {
    const { categoriaNombre, categoriaValor } = requestParams[1];

    let tipo = 'planes';
    if (categoriaNombre === 'productCategory') {
      if (categoriaValor === 'TerminalesGeneral') {
        tipo = 'equipos';
      } else if (categoriaValor === 'TecnologiaGeneral') {
        tipo = 'tecnologias';
      }
    } else {
      if (categoriaValor.startsWith('PO_MovPosPlan')) {
        tipo = 'plan';
      } else if (categoriaValor.startsWith('PO_Tec')) {
        tipo = 'tecnologia';
      } else if (categoriaValor.startsWith('PO_Equ')) {
        tipo = 'equipo';
      } else {
        tipo = 'association-plan';
      }
    }

    const valor = JSON.stringify(require(`./${tipo}.json`));
    return new Observable((subscriber) => {
      subscriber.next(JSON.parse(valor));
      subscriber.complete();
    });
  }

  generarAtributosContextoCliente(
    atributosContextoCliente: AtributosContextoClienteModel
  ): { [header: string]: string } {
    let valorDefecto = 'Todos';

    const atributos = this.restIntegrationService.settings.getConfiguration(`${this.alias}.attributes`);
    const { global, context } = atributos;

    return context
      .map((nombre: string) => {
        let valor = atributosContextoCliente.darVariablePorNumeroSuscripcionYNombre(
          atributosContextoCliente.customerID,
          nombre
        );

        if (!valor) {
          if (valor === undefined) {
            valor = valorDefecto;
          } else {
            valor = `${valor}`;
          }
        }

        // // TODO Eliminar al corregir el servicio
        // if (nombre === 'segmento' || nombre === 'convenio') {
        //   valor = valorDefecto;
        // }
        return {
          nombre,
          valor,
        };
      })
      .reduce((header: { [nombre: string]: string }, variable: { nombre: string; valor: string }) => {
        header[`Context.${variable.nombre}`] = variable.valor;
        return header;
      }, global);
  }

  public buildGetCatalogoURL(url: string): string {
    return url;
  }

  // TODO Optimizar para mayor entendimiento
  parseGetCatalogoResponse(response: CatalogoResponseTemplate): M[] {
    const respuestaCatalogo: any[] = response.getProductOfferingResponse.map((producto) => {
      const resultadoProducto = Object.assign(producto, producto.versions.pop());
      delete resultadoProducto.versions;

      resultadoProducto.associations = (resultadoProducto.associations || []).map((associations) => {
        return {
          associationType: associations.associationType,
          targetSpecificationId: associations.targetSpecificationId,
          targetSpecificationName: '',
        };
      });

      resultadoProducto.specificationAssociations = [];

      resultadoProducto.associations.forEach((association) => {
        resultadoProducto.specificationAssociations.push(association);
      });

      resultadoProducto.characteristics = (resultadoProducto.characteristics || []).map((caracteristica) => {
        const resultadoCaracteristicas = Object.assign(caracteristica, (caracteristica.versions || []).pop());
        delete resultadoCaracteristicas.versions;

        resultadoCaracteristicas.characteristicValues = (resultadoCaracteristicas.characteristicValues || []).map(
          (characteristicValue) => {
            return {
              displayValue: characteristicValue.displayValue,
              value: characteristicValue.value,
            };
          }
        );

        resultadoCaracteristicas.properties = (resultadoCaracteristicas.properties || []).reduce(
          (propertiesObject, property) => {
            const { value } = property;
            delete property.value;
            propertiesObject[value] = property;
            return propertiesObject;
          },
          {}
        );

        return resultadoCaracteristicas;
      });

      resultadoProducto.configurableCharacteristics = [];
      resultadoProducto.specificationCharacteristics = [];

      resultadoProducto.characteristics.forEach((characteristic) => {
        if (characteristic.properties.CONF && characteristic.type === 'pscmUserAttribute') {
          resultadoProducto.configurableCharacteristics.push(characteristic);
        } else {
          resultadoProducto.specificationCharacteristics.push(characteristic);
        }
        if (characteristic.id == 'Color') {
          resultadoProducto.color1 = characteristic.value;
        } else if (characteristic.id == 'specificationSubSubtype') {
          resultadoProducto.tipo = characteristic.value;
        }
      });

      resultadoProducto.productOfferingPrices = (resultadoProducto.productOfferingPrices || []).map((itemPrecio) => {
        const resultadoItemPrecio = Object.assign(itemPrecio, itemPrecio.versions.pop());
        delete resultadoItemPrecio.versions;

        resultadoItemPrecio.characteristics = (resultadoItemPrecio.characteristics || []).reduce(
          (caracteristicas, caracteristica) => {
            const resultadoCaracteristicas = Object.assign(caracteristica, caracteristica.versions.pop());
            delete resultadoCaracteristicas.versions;

            caracteristicas[caracteristica.id] = caracteristica;
            return caracteristicas;
          },
          {}
        );

        return resultadoItemPrecio;
      });

      resultadoProducto.amount = resultadoProducto.productOfferingPrices.reduce((amount, productOfferingPrice) => {
        return amount + productOfferingPrice.price.amount;
      }, 0);

      resultadoProducto.taxes = resultadoProducto.productOfferingPrices
        .filter((productOfferingPrice) => productOfferingPrice.id.toLowerCase().startsWith('tax_'))
        .reduce((amount, productOfferingPrice) => {
          return amount + productOfferingPrice.price.amount;
        }, 0);
      return resultadoProducto;
    });

    return (respuestaCatalogo || []).map((data) => this.convertToModel(data));
  }

  abstract convertToModel(data: any): M;

  parseResponse(response: T): M {
    return this.convertToModel(response);
  }
}
