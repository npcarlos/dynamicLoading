import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as LoaderReducer from './loader.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(LoaderReducer.generosFeatureKey, LoaderReducer.reducer)],
})
export class LoaderReducerModule {}
