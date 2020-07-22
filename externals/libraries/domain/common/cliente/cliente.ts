import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ClienteContactInfoTemplate {
  contactType: string;
  contactInfo: string;
  isprimary: string;

  contactType2?: string;
  contactInfo2?: string;
  isprimary2?: string;

  contactType3?: string;
  contactInfo3?: string;
  isprimary3?: string;
}
export interface ClienteListadoContratosTemplate {
  customerId?: string;
  customerId2?: string;
  customerId3?: string;
}

export interface ClienteListadoDireccionesTemplate {
  district: string;
  cityArea: string;
  tipo: string;
  addressUsage: string;
  addressText: string;
}
export interface ClienteTemplate extends EntityTemplate {
  documentIssueDate: string;
  firstSurName: string;
  otherSurNames?: string;
  customerCategory: string;
  email: string;
  phoneNumber: string;
  district: string;
  city: string;
  cityArea: string;
  MGLAddressId: string;
  address: string;
  billCycle?: string;

  individualCustomerId: string;
  documentNumber: string;
  activeFlag?: number;
  segment?: number;
  protectedData?: number;
  name: string;
  firstName: string;
  secondName: string;
  documentType: number;
  gender: number;
  dateOfBirth?: Date;
  digitalDate: Date;
  maritalStatus: number;
  contactInfo: ClienteContactInfoTemplate[];
  listadoContratosBSCS: ClienteListadoContratosTemplate[];
}

export class ClienteModel extends EntityModel<ClienteTemplate> implements ClienteTemplate {
  documentIssueDate: string;
  firstSurName: string;
  otherSurNames?: string;
  customerCategory: string;
  email: string;
  phoneNumber: string;
  district: string;
  city: string;
  cityArea: string;
  MGLAddressId: string;
  address: string;
  billCycle?: string;

  individualCustomerId: string;
  documentNumber: string;
  activeFlag?: number;
  segment?: number;
  protectedData?: number;
  name: string;
  firstName: string;
  secondName: string;
  documentType: number;
  gender: number;
  dateOfBirth?: Date;
  digitalDate: Date;
  maritalStatus: number;
  contactInfo: ClienteContactInfoTemplate[];
  listadoContratosBSCS: ClienteListadoContratosTemplate[];
  listadoDirecciones: ClienteListadoDireccionesTemplate[];

  obtenerCodigoTipoPersona() {
    let tipoPersona = null;
    switch (parseInt(`${this.documentType}`)) {
      case 2:
        tipoPersona = 'PERJU';
        break;
      default:
        tipoPersona = 'PERNA';
        break;
    }
    return tipoPersona;
  }

  darCodigoTipoDocumento() {
    return ClienteModel.obtenerCodigoTipoDocumento(parseInt(`${this.documentType}`));
  }

  static obtenerCodigoTipoDocumento(idTipoDocumento: number) {
    let tipoDocumento = null;
    switch (idTipoDocumento) {
      case 1:
        tipoDocumento = 'CC';
        break;
      case 2:
        tipoDocumento = 'NIT';
        break;
      case 3:
        tipoDocumento = 'PJE';
        break;
      case 4:
        tipoDocumento = 'CE';
        break;
      case 5:
        tipoDocumento = 'PAS';
        break;
      case 6:
        tipoDocumento = 'CD';
        break;
      case 7:
        tipoDocumento = 'TI';
        break;
      case 8:
        tipoDocumento = 'DNI';
        break;
      case 9:
        tipoDocumento = 'PEP';
        break;
      default:
        tipoDocumento = `${idTipoDocumento}`;
        break;
    }
    return tipoDocumento;
  }
}

export interface ClienteCustomerIdTemplate extends EntityTemplate {
  customerID: string;
}

export class ClienteCustomerIdModel extends EntityModel<ClienteCustomerIdTemplate>
  implements ClienteCustomerIdTemplate {
  customerID: string;
}
