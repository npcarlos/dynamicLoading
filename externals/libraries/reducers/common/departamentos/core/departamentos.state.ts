import { DepartamentosModel } from '~libraries/domain/common/departamentos';

export interface DepartamentosState {
  departamentos: DepartamentosModel[];
}

export interface ReducerDepartamentosState extends DepartamentosState {}
