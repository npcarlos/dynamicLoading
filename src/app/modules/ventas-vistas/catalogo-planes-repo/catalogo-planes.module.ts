import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { DialogModule } from 'primeng/dialog';
// import { CarouselModule } from 'primeng/carousel';

// import { UsuarioStoreModule } from '~modules/business/usuario-store';
// import { ClienteStoreModule } from '~modules/business/cliente-store';
// import { AtributosContextoClienteStoreModule } from '~modules/business/atributos-contexto-cliente-store';
// import { MatrizRiesgoModule } from '~modules/business/matriz-riesgo-store';
import { CatalogoStoreModule } from '../../../../../externals/modules/business/catalogo-store';
// import { OrderNegotiatorStoreModule } from '~modules/business/order-negotiator-services-store';

// import { VisualComponentsModule } from '../../visual-components/visual-components.module';
// import { CatalogoPlanesRoutingModule } from './catalogo-planes-routing.module';

import { CatalogoPlanesComponent } from './catalogo-planes/catalogo-planes.component';
import { VistaCatalogoPlanesComponent } from './vista-catalogo-planes/vista-catalogo-planes.component';
// import { ModalPlanesComponent } from '../../visual-components/modal-planes/modal-planes.component';
@NgModule({
  declarations: [CatalogoPlanesComponent, VistaCatalogoPlanesComponent],//, ModalPlanesComponent],
  imports: [
    CommonModule,
    FormsModule,

    // UsuarioStoreModule,
    // ClienteStoreModule,
    // AtributosContextoClienteStoreModule,
    // MatrizRiesgoModule,
    CatalogoStoreModule,
    // OrderNegotiatorStoreModule,

    // CatalogoPlanesRoutingModule,

    // CarouselModule,
    // DialogModule,

    // VisualComponentsModule,
    CatalogoPlanesComponent
  ],
  exports: [CatalogoPlanesComponent, VistaCatalogoPlanesComponent],
})
export class CatalogoPlanesRepoModule {}
