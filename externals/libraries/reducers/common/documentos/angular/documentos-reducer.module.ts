import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DocumentosIntegrationModule } from '~modules/integration/documentos';

import * as documentosReducer from './documentos.reducer';
import { DocumentosEffects } from './documentos.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(documentosReducer.documentosFeatureKey, documentosReducer.reducer),

    DocumentosIntegrationModule,
    EffectsModule.forFeature([DocumentosEffects]),
  ],
})
export class DocumentosReducerModule {}
