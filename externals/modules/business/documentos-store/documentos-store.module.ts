import { NgModule } from '@angular/core';

import { DocumentosReducerModule } from '~libraries/reducers/common/documentos/angular';
import { DocumentosStoreService } from './documentos-store.service';
import { DocumentosResolver } from './documentos-store.resolver';

@NgModule({
  declarations: [],
  imports: [DocumentosReducerModule],
  providers: [DocumentosStoreService, DocumentosResolver],
})
export class DocumentosStoreModule {}
