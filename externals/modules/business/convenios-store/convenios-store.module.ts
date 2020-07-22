import { NgModule } from '@angular/core';

import { ConveniosReducerModule } from '~libraries/reducers/common/convenios/angular';
import { ConveniosStoreService } from './convenios-store.service';

@NgModule({
  declarations: [],
  imports: [ConveniosReducerModule],
  providers: [ConveniosStoreService],
})
export class ConveniosStoreModule {}
