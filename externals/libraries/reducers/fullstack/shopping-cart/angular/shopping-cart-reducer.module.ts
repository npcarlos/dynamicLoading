import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as shoppingCartReducer from './shopping-cart.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature(shoppingCartReducer.shoppingCartFeatureKey, shoppingCartReducer.reducer)],
})
export class ShoppingCartReducerModule {}
