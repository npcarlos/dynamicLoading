import { NgModule } from '@angular/core';

import { EstadoCivilReducerModule } from '~libraries/reducers/common/estado-civil/angular';
import { EstadoCivilStoreService } from './estado-civil-store.service';

@NgModule({
  declarations: [],
  imports: [EstadoCivilReducerModule],
  providers: [EstadoCivilStoreService],
})
export class EstadoCivilStoreModule {}
