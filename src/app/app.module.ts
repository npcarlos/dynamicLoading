import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }         from './app.component';
import { VistaCatalogoPlanesComponent }   from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/vista-catalogo-planes.component';
import { VistaCatalogosBannerComponent }    from './modules/ventas-vistas/catalogo-generico/vista-catalogos-banner.component';
import { EquiposComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { CatalogoDirective }          from './catalogo.directive';
import { GrillaComponent } from './modules/visual-components/grilla/grilla.component';
import { ItemEquipoComponent } from './modules/visual-components/item-equipo/item-equipo.component';
import { ItemPlanComponent } from './modules/visual-components/item-plan/item-plan.component';
import { ItemDirective } from './modules/visual-components/item.directive';
import { CatalogoService }            from '../../externals/modules/business/dummy/catalogo.service';
import { CatalogoPlanesRepoModule } from './modules/ventas-vistas/catalogo-planes-repo/catalogo-planes.module';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [CatalogoService],
  declarations: [ AppComponent,
                  VistaCatalogosBannerComponent,
                  VistaCatalogoPlanesComponent,
                  EquiposComponent,
                  CatalogoDirective,
                  ItemEquipoComponent,
                  ItemPlanComponent,
                  GrillaComponent,
                  ItemDirective,
                  ],
  entryComponents: [ VistaCatalogoPlanesComponent, EquiposComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

