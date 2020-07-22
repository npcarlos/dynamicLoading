import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DepartamentosIntegrationModule } from '~modules/integration/departamentos';

import * as departamentosReducer from './departamentos.reducer';
import { DepartamentosEffects } from './departamentos.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(departamentosReducer.departamentosFeatureKey, departamentosReducer.reducer),

    DepartamentosIntegrationModule,
    EffectsModule.forFeature([DepartamentosEffects]),
  ],
})
export class DepartamentosReducerModule {}
