import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';

import { EventoModel } from '~libraries/domain/common/loader';
import { ReducerLoaderState, EventosLoaderState } from '../core/loader.state';

export interface ApplicationState {
  loader: Map<string, any>;
}

const selectEventosFeature = (state: ApplicationState): ReducerLoaderState => <EventosLoaderState>state.loader.toJS();

//
const selectEventosData = (state: EventosLoaderState): EventoModel[] => state.eventos;

//
export const selectEventos = createSelector(selectEventosFeature, selectEventosData);
