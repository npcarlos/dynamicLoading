import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TiposCategoriasIntegrationModule } from '~modules/integration/tipos-categorias/tipos-categorias.module';

import * as tiposCategoriasReducer from './tipos-categorias.reducer';
import { TiposCategoriasEffects } from './tipos-categorias.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(tiposCategoriasReducer.tiposCategoriaFeatureKey, tiposCategoriasReducer.reducer),
    TiposCategoriasIntegrationModule,
    EffectsModule.forFeature([TiposCategoriasEffects]),
  ],
})
export class TiposCategoriasReducerModule {}
