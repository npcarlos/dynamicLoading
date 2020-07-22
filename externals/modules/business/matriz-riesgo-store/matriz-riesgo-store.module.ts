import { NgModule } from '@angular/core';

import { MatrizRiesgoReducerModule } from '~libraries/reducers/common/matriz-riesgo/angular';
import { MatrizRiesgoStoreService } from './matriz-riesgo-store.service';

@NgModule({
  declarations: [],
  imports: [MatrizRiesgoReducerModule],
  providers: [MatrizRiesgoStoreService],
})
export class MatrizRiesgoModule {}
