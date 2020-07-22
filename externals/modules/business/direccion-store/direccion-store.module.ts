import { NgModule } from '@angular/core';

import { DireccionReducerModule } from '~libraries/reducers/common/direccion/angular';
import { DireccionStoreService } from './direccion-store.service';

@NgModule({
  declarations: [],
  imports: [DireccionReducerModule],
  providers: [DireccionStoreService],
})
export class DireccionStoreModule {}
