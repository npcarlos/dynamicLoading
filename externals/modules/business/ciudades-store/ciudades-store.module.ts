import { NgModule } from '@angular/core';

import { CiudadesReducerModule } from '~libraries/reducers/common/ciudades/angular';
import { CiudadesStoreService } from './ciudades-store.service';

@NgModule({
  declarations: [],
  imports: [CiudadesReducerModule],
  providers: [CiudadesStoreService],
})
export class CiudadesStoreModule {}
