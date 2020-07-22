import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface UsuarioTemplate extends EntityTemplate {
  firstName: string;
  lastName: string;
  documentType: string;
  documentId: Number;
  email: string;
  position: string;
  costCenter: string;
  department: string;
  city: string;
  businessStructureClass: string;
  personCode: Number;
  salePoint: string;
  employeeCode: Number;
  commission: Boolean;
  direction: string;
  committeeLeaderShip: string;
  directBoss: string;
  employer: string;
  admission: string;
  managementDirection: string;
  territory: string;
  commercialStructureGroup: string;
  gvArea: string;
  gvDistrict: string;
  gvDivision: string;
  gvZone: string;
  idArea: string;
  idDisctrict: string;
  idDivision: string;
  idZone: string;
  gvRed: string;
  contractTerminationReason: string;
  userStatus: string;
  salesSubChannel: string;
  commercialStructureType: string;
  networkUser: string;
  polyhedronUser: string;
  acuser: string;
  sapBillingUser: string;
  rrUser: string;
  responsiblePeopleUnit: string;
  responsibleHouseHoldUni: string;
  responsibleBusinessUnit: string;
  advisorCallCenterCode: string;
  idEmployer: string;
  modifiedBy: string;
  modified: string;
}

export interface UsuarioResponseTemplate {
  isValid: string;
  message: string;
}
export class UsuarioModel extends EntityModel<UsuarioTemplate> implements UsuarioTemplate {
  firstName: string;
  lastName: string;
  documentType: string;
  documentId: Number;
  email: string;
  position: string;
  costCenter: string;
  department: string;
  city: string;
  businessStructureClass: string;
  personCode: Number;
  salePoint: string;
  employeeCode: Number;
  commission: Boolean;
  direction: string;
  committeeLeaderShip: string;
  directBoss: string;
  employer: string;
  admission: string;
  managementDirection: string;
  territory: string;
  commercialStructureGroup: string;
  gvArea: string;
  gvDistrict: string;
  gvDivision: string;
  gvZone: string;
  idArea: string;
  idDisctrict: string;
  idDivision: string;
  idZone: string;
  gvRed: string;
  contractTerminationReason: string;
  userStatus: string;
  salesSubChannel: string;
  commercialStructureType: string;
  networkUser: string;
  polyhedronUser: string;
  acuser: string;
  sapBillingUser: string;
  rrUser: string;
  responsiblePeopleUnit: string;
  responsibleHouseHoldUni: string;
  responsibleBusinessUnit: string;
  advisorCallCenterCode: string;
  idEmployer: string;
  modifiedBy: string;
  modified: string;

  esDistribuidor() {
    return this.salesSubChannel !== 'dealer';
  }
}
