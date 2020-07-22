import { NgModule } from '@angular/core';

import { GeneracionContratoReducerModule } from '~libraries/reducers/common/generacion-contrato/angular';
import { GeneracionContratoStoreService } from './generacion-contrato-store.service';

@NgModule({
  declarations: [],
  imports: [GeneracionContratoReducerModule],
  providers: [GeneracionContratoStoreService],
})
export class GeneracionContratoStoreModule {}
