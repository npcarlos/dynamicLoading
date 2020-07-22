import { CiudadesModel } from '~libraries/domain/common/ciudades';

export interface CiudadesState {
  ciudades: CiudadesModel[];
}

export interface ReducerCiudadesState extends CiudadesState {}
