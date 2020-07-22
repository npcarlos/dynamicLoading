import { Map } from 'immutable';
import { createSelector } from '@ngrx/store';
import { ReducerValidacionImeiState, ValidacionImeiState } from '../core/validacion-imei.state';
import { ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';

export interface ApplicationState {
  validacionImei: Map<string, any>;
}

const selectValidacionImeiFeature = (state: ApplicationState): ReducerValidacionImeiState =>
  <ReducerValidacionImeiState>state.validacionImei.toJS();

//

const selectValidacionImeiData = (state: ValidacionImeiState): ValidacionImeiModel[] => state.seriales;

//

export const selectValidacionImei = createSelector(selectValidacionImeiFeature, selectValidacionImeiData);
