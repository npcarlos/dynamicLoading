import { NgModule } from '@angular/core';

import { InventarioReducerModule } from '~libraries/reducers/common/inventario/angular';
import { InventarioStoreService } from './inventario-store.service';

@NgModule({
  declarations: [],
  imports: [InventarioReducerModule],
  providers: [InventarioStoreService],
})
export class InventarioStoreModule {}
