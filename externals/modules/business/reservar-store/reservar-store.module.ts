import { NgModule } from '@angular/core';

import { ReservarReducerModule } from '~libraries/reducers/common/reservar/angular';
import { ReservarStoreService } from './reservar-store.service';

@NgModule({
  declarations: [],
  imports: [ReservarReducerModule],
  providers: [ReservarStoreService],
})
export class ReservarStoreModule {}
