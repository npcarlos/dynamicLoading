import { NgModule } from '@angular/core';

import { GrafologoReducerModule } from '~libraries/reducers/common/grafologo/angular';
import { GrafologoStoreService } from './grafologo-store.service';

@NgModule({
  declarations: [],
  imports: [GrafologoReducerModule],
  providers: [GrafologoStoreService],
})
export class GrafologoStoreModule {}
