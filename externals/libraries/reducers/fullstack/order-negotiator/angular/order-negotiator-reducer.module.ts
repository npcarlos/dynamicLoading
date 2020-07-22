import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { OrderNegotiatorIntegrationModule } from '~modules/integration/order-negotiator-services';

import * as shoppingCartReducer from './order-negotiator.reducer';
import { ShoppingCartEffects } from './order-negotiator.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(shoppingCartReducer.shoppingCartFeatureKey, shoppingCartReducer.reducer),

    OrderNegotiatorIntegrationModule,
    EffectsModule.forFeature([ShoppingCartEffects]),
  ],
})
export class OrderNegotiatorReducerModule {}
