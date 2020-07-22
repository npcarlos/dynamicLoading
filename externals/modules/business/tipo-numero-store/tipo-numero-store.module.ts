import { NgModule } from '@angular/core';

import { TipoNumeroReducerModule } from '~libraries/reducers/common/tipo-numero/angular';
import { TipoNumeroStoreService } from './tipo-numero-store.service';

@NgModule({
  declarations: [],
  imports: [TipoNumeroReducerModule],
  providers: [TipoNumeroStoreService],
})
export class TipoNumeroStoreModule {}
