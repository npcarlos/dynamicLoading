import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ContextAttributesRestClientModule } from '~modules/integration/atributos-contexto-cliente';

import * as contextAttributesRestClientReducer from './atributos-contexto-cliente.reducer';
import { ContextAttributesClientEffects } from './atributos-contexto-cliente.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      contextAttributesRestClientReducer.atributosContextoClienteFeatureKey,
      contextAttributesRestClientReducer.reducer
    ),

    ContextAttributesRestClientModule,
    EffectsModule.forFeature([ContextAttributesClientEffects]),
  ],
})
export class AtributosContextoClienteReducerModule {}
