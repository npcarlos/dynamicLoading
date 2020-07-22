import { NgModule } from '@angular/core';

import { NumerosReducerModule } from '~libraries/reducers/common/numeros/angular';
import { NumerosStoreService } from './numeros-store.service';

@NgModule({
  declarations: [],
  imports: [NumerosReducerModule],
  providers: [NumerosStoreService],
})
export class NumerosStoreModule {}
