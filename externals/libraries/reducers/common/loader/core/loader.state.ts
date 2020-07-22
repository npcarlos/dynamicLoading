import { EventoModel } from '~libraries/domain/common/loader';

export interface EventosLoaderState {
  eventos: EventoModel[];
}

export interface ReducerLoaderState extends EventosLoaderState {}
