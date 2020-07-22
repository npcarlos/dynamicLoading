import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as serialReducer from './serial.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(serialReducer.serialFeatureKey, serialReducer.reducer)],
})
export class SerialReducerModule {}
