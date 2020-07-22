import { NgModule } from '@angular/core';

import { DepartamentosReducerModule } from '~libraries/reducers/common/departamentos/angular';
import { DepartamentosStoreService } from './departamentos-store.service';

@NgModule({
  declarations: [],
  imports: [DepartamentosReducerModule],
  providers: [DepartamentosStoreService],
})
export class DepartamentosStoreModule {}
