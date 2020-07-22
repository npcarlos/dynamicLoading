import { NgModule } from '@angular/core';

import { LoaderReducerModule } from '~libraries/reducers/common/loader/angular';
import { LoaderStoreService } from './loader-store.service';

@NgModule({
  declarations: [],
  imports: [LoaderReducerModule],
  providers: [LoaderStoreService],
})
export class LoaderStoreModule {}
