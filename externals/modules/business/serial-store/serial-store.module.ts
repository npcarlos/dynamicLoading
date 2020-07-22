import { NgModule } from '@angular/core';

import { SerialReducerModule } from '~libraries/reducers/common/serial/angular';
import { SerialStoreService } from './serial-store.service';

@NgModule({
  declarations: [],
  imports: [SerialReducerModule],
  providers: [SerialStoreService],
})
export class SerialStoreModule {}
