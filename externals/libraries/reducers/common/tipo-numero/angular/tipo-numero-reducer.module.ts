import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TipoNumeroIntegrationModule } from '~modules/integration/tipo-numero';

import * as tipoNumeroReducer from './tipo-numero.reducer';
import { TipoNumeroEffects } from './tipo-numero.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(tipoNumeroReducer.tipoNumeroFeatureKey, tipoNumeroReducer.reducer),

    TipoNumeroIntegrationModule,
    EffectsModule.forFeature([TipoNumeroEffects]),
  ],
})
export class TipoNumeroReducerModule {}
