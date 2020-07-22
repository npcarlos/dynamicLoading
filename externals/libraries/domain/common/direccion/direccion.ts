import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ListAddresMarksTemplate {
  markId?: string;
  descriptionMark?: string;
}

export interface NodeTemplate {
  codeNode: string;
  state: string;
  qualificationDate: string;
  nodeName: string;
  technology: string;
}

export interface UperGeographycLevel2Template {
  geographyStateId: number;
  name: string;
  daneCode: string;
  geographycLevelType: string;
  uperGeographycLevel?: string;
}
export interface RegionTemplate {
  regionId: number;
  name: string;
  technicalCode: string;
}
export interface UperGeographycLevelTemplate {
  geographyStateId: number;
  name: string;
  daneCode: string;
  geographycLevelType: string;
  uperGeographycLevel: UperGeographycLevel2Template;
}

export interface ListHhppsTemplate {
  hhppId: number;
  state: string;
  technology: string;
  viability: string;
  node: NodeTemplate;
  subCcmmTechnology: string;
  listAddresMarks: ListAddresMarksTemplate[];
  constructionType: string;
  rushtype: string;
  notasHhpp: string;
}

export interface ListCarrierCoverTemplate {
  LOGYTECH1?: string;
  LOGYTECH3?: string;
}

export interface ListCoverTemplate {
  technology?: string;
  node?: string;
  state?: string;
  qualificationDate?: Date;
  hhppExistente?: string;
  isChecked?: boolean;
  poligono?: string;
  stateName?: string;
}
export interface SplitAddresTemplate {
  idTipoDireccion: string;
  dirPrincAlt: string;
  barrio: string;
  tipoViaPrincipal: string;
  numViaPrincipal: string;
  ltViaPrincipal: string;
  nlPostViaP?: string;
  bisViaPrincipal?: string;
  cuadViaPrincipal?: string;
  tipoViaGeneradora?: string;
  numViaGeneradora: string;
  ltViaGeneradora: string;
  nlPostViaG?: string;
  bisViaGeneradora?: string;
  cuadViaGeneradora?: string;
  placaDireccion: string;
  cpTipoNivel1?: string;
  cpTipoNivel2?: string;
  cpTipoNivel3?: string;
  cpTipoNivel4?: string;
  cpTipoNivel5?: string;
  cpTipoNivel6?: string;
  cpValorNivel1?: string;
  cpValorNivel2?: string;
  cpValorNivel3?: string;
  cpValorNivel4?: string;
  cpValorNivel5?: string;
  cpValorNivel6?: string;
  mzTipoNivel1?: string;
  mzTipoNivel2?: string;
  mzTipoNivel3?: string;
  mzTipoNivel4?: string;
  mzTipoNivel5?: string;
  mzValorNivel1?: string;
  mzValorNivel2?: string;
  mzValorNivel3?: string;
  mzValorNivel4?: string;
  mzValorNivel5?: string;
  idDirCatastro: string;
  mzTipoNivel6?: string;
  mzValorNivel6?: string;
  itTipoPlaca?: string;
  itValorPlaca?: string;
  estadoDirGeo: string;
  letra3G?: string;
}
export interface CityTemplate {
  cityId: string;
  name: string;
  daneCode: string;
  uperGeographycLevel: UperGeographycLevelTemplate;
  region: RegionTemplate;
  claroCode: string;
  geographycLevelType: string;
}

export interface DireccionTemplate extends EntityTemplate {
  addressId: string;
  city: CityTemplate;
  igacAddress: string;
  adressReliability: number;
  latitudeCoordinate: string;
  lengthCoordinate: string;
  splitAddres: SplitAddresTemplate;
  listCover: ListCoverTemplate[];
  listCarrierCover: ListCarrierCoverTemplate[];
  stratum: string;
  mensajeDireccionAntigua: string;
  listHhpps: ListHhppsTemplate[];
}

export interface DireccionIdTemplate {
  direccionDetalladaId: string;
}

export interface DireccionResponseTemplate {
  addresses: DireccionTemplate;
}

export class DireccionModel extends EntityModel<DireccionTemplate> implements DireccionTemplate {
  addressId: string;
  city: CityTemplate;
  igacAddress: string;
  adressReliability: number;
  latitudeCoordinate: string;
  lengthCoordinate: string;
  splitAddres: SplitAddresTemplate;
  listCover: ListCoverTemplate[];
  listCarrierCover: ListCarrierCoverTemplate[];
  stratum: string;
  mensajeDireccionAntigua: string;
  listHhpps: ListHhppsTemplate[];
  esNueva: boolean = false;
}
