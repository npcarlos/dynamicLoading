import { NgModule } from '@angular/core';

import { StorageMediumReducerModule } from '~libraries/reducers/common/storage-medium/angular';
import { StorageMediumStoreService } from './storage-medium-store.service';

@NgModule({
  declarations: [],
  imports: [StorageMediumReducerModule],
  providers: [StorageMediumStoreService],
})
export class StorageMediumStoreModule {}
