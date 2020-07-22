import { NgModule } from '@angular/core';

import { ClienteReducerModule } from '~libraries/reducers/common/cliente/angular';
import { ClienteStoreService } from './cliente-store.service';
import { ClienteResolver } from './cliente-store.resolver';

@NgModule({
  declarations: [],
  imports: [ClienteReducerModule],
  providers: [ClienteStoreService, ClienteResolver],
})
export class ClienteStoreModule {}
