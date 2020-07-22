import { NgModule } from '@angular/core';

import { UsuarioReducerModule } from '~libraries/reducers/common/usuario/angular';
import { UsuarioStoreService } from './usuario-store.service';
import { UsuarioResolver } from './usuario-store.resolver';

@NgModule({
  declarations: [],
  imports: [UsuarioReducerModule],
  providers: [UsuarioStoreService, UsuarioResolver],
})
export class UsuarioStoreModule {}
