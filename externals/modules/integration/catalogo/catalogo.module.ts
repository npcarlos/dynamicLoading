import { NgModule } from '@angular/core';

import { ClaroHttpModule, RestIntegrationService } from '../../../modules/infraestructure/claro-http-module';

import { CatalogoPlanesIntegrationService } from './catalogo-planes.service';
import { CatalogoEquiposIntegrationService } from './catalogo-equipos.service';
import { CatalogoTecnologiasIntegrationService } from './catalogo-tecnologias.service';

@NgModule({
  declarations: [],
  imports: [ClaroHttpModule],
  providers: [
    {
      provide: CatalogoPlanesIntegrationService,
      useClass: CatalogoPlanesIntegrationService,
      deps: [RestIntegrationService],
    },
    {
      provide: CatalogoEquiposIntegrationService,
      useClass: CatalogoEquiposIntegrationService,
      deps: [RestIntegrationService],
    },
    {
      provide: CatalogoTecnologiasIntegrationService,
      useClass: CatalogoTecnologiasIntegrationService,
      deps: [RestIntegrationService],
    },
  ],
})
export class CatalogoModule {}
