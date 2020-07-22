import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ContextAttributeTemplate {
  name: string;
  value: string;
}

export interface SuscriptionTemplate {
  subscriberNumber: string;
  contextAttributes?: ContextAttributeTemplate[];
}

export interface AtributosContextoClienteTemplate extends EntityTemplate {
  customerID: string;
  subscriptions: SuscriptionTemplate[];
}

export interface AtributosContextoClienteResponseTemplate {
  headerResponse: any;
  ok: string;
  messagge: string;
  body: AtributosContextoClienteTemplate[];
}

export class AtributosContextoClienteModel extends EntityModel<AtributosContextoClienteTemplate>
  implements AtributosContextoClienteTemplate {
  customerID: string;
  subscriptions: SuscriptionTemplate[];

  darVariablePorNumeroSuscripcionYNombre(numeroSuscripcion: string, nombreVariable: string) {
    const suscripcion = this.subscriptions.find((suscripcion) => suscripcion.subscriberNumber === numeroSuscripcion);
    return suscripcion ? this.darVariablePorSuscripcionYNombre(suscripcion, nombreVariable) : null;
  }

  darVariablePorSuscripcionYNombre(suscripcion: SuscriptionTemplate, nombre: string) {
    const variable = suscripcion.contextAttributes.find((attribute) => attribute.name === nombre);
    return variable ? variable.value : null;
  }
}
