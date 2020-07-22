import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StorageMediumIntegrationModule } from '~modules/integration/storage-medium/storage-medium.module';
import * as storageMediumReducer from './storage-medium.reducer';
import { StorageMediumEffects } from './storage-medium.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(storageMediumReducer.storageMediumFeatureKey, storageMediumReducer.reducerStorageMedium),

    StorageMediumIntegrationModule,
    EffectsModule.forFeature([StorageMediumEffects]),
  ],
})
export class StorageMediumReducerModule {}
