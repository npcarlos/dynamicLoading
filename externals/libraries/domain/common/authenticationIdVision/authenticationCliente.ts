import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface AuthenticationClienteTemplate extends EntityTemplate {
  departamento: string;
  codigoDaneDepartamento: string;
  municipio: string;
  codigoDaneMunicipio: string;
  phoneNumber: string;

  validationMethod: string;
  phoneType: string;
  selectedPhoneNumber: string;
}

export class DocumentoClienteModel extends EntityModel<AuthenticationClienteTemplate>
  implements AuthenticationClienteTemplate {
  departamento: string;
  codigoDaneDepartamento: string;
  municipio: string;
  codigoDaneMunicipio: string;
  phoneNumber: string;

  validationMethod: string;
  phoneType: string;
  selectedPhoneNumber: string;
}
