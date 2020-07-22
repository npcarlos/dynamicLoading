import { NgModule } from '@angular/core';

import { CatalogoReducerModule } from '../../../libraries/reducers/fullstack/catalogo/angular';
import { CatalogoStoreService } from './catalogo-store.service';

@NgModule({
  declarations: [],
  imports: [CatalogoReducerModule],
  providers: [CatalogoStoreService],
})
export class CatalogoStoreModule {}
