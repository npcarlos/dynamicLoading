import { NgModule } from '@angular/core';

import { ShoppingCartReducerModule } from '~libraries/reducers/fullstack/shopping-cart/angular';
import { ShoppingCartStoreService } from './shopping-cart-store.service';

@NgModule({
  declarations: [],
  imports: [ShoppingCartReducerModule],
  providers: [ShoppingCartStoreService],
})
export class ShoppingCartStoreModule {}
