import { NgModule } from '@angular/core';

import { AtributosContextoClienteReducerModule } from '~libraries/reducers/fullstack/atributos-contexto-cliente/angular';
import { AtributosContextoClienteStoreService } from './atributos-contexto-cliente-store.service';
import { AtributosContextoClienteResolver } from './atributos-contexto-cliente-store.resolver';

@NgModule({
  declarations: [],
  imports: [AtributosContextoClienteReducerModule],
  providers: [AtributosContextoClienteStoreService, AtributosContextoClienteResolver],
})
export class AtributosContextoClienteStoreModule {}
