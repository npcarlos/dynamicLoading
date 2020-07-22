import { NgModule } from '@angular/core';

import { TiposCategoriasReducerModule } from '~libraries/reducers/common/tipos-categorias/angular';
import { TiposCategoriasStoreService } from './tipos-categorias-store.service';

@NgModule({
  declarations: [],
  imports: [TiposCategoriasReducerModule],
  providers: [TiposCategoriasStoreService],
})
export class GenerosStoreModule {}
