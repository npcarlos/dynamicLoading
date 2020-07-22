import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CatalogoModule } from '../../../../../modules/integration/catalogo';

import * as catalogoReducer from './catalogo.reducer';
import { CatalogoEffects } from './catalogo.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(catalogoReducer.catalogoFeatureKey, catalogoReducer.reducer),

    CatalogoModule,
    EffectsModule.forFeature([CatalogoEffects]),
  ],
})
export class CatalogoReducerModule {}
