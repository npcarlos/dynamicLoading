import { ConvenioModel } from '~libraries/domain/common/convenios';

export interface ConveniosState {
  convenios: ConvenioModel[];
}

export interface ReducerConveniosState extends ConveniosState {}
