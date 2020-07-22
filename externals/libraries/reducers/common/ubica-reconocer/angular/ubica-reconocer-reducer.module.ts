import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as ubicaReconocerReducer from './ubica-reconocer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UbicaReconocerEffects } from './ubica-reconocer.effects';
import { UbicaReconocerModule } from '~modules/integration/ubicaReconocer/ubica-reconocer-service.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(ubicaReconocerReducer.ubicaReconocerFeatureKey, ubicaReconocerReducer.reducer),
    UbicaReconocerModule,
    EffectsModule.forFeature([UbicaReconocerEffects]),
  ],
})
export class UbicaReconocerReducerModule {}
