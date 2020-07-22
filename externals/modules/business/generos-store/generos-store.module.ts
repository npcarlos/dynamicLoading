import { NgModule } from '@angular/core';

import { GenerosReducerModule } from '~libraries/reducers/common/generos/angular';
import { GenerosStoreService } from './generos-store.service';

@NgModule({
  declarations: [],
  imports: [GenerosReducerModule],
  providers: [GenerosStoreService],
})
export class GenerosStoreModule {}
