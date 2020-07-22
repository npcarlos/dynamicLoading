import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }         from './app.component';
import { PlanesComponent }   from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/planes.component';
import { VistaCatalogosComponent }    from './vista-catalogos/vista-catalogos';
import { EquiposComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { CatalogoDirective }          from './catalogo.directive';
import { CatalogoService }            from './catalogo.service';
import { GrillaComponent } from './modules/visual-components/grilla/grilla.component';
import { ItemEquipoComponent } from './modules/visual-components/item-equipo/item-equipo.component';
import { ItemPlanComponent } from './modules/visual-components/item-plan/item-plan.component';
import { ItemService } from './modules/visual-components/item.service';
import { ItemDirective } from './modules/visual-components/item.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [CatalogoService, ItemService],
  declarations: [ AppComponent,
                  VistaCatalogosComponent,
                  PlanesComponent,
                  EquiposComponent,
                  CatalogoDirective,
                  ItemEquipoComponent,
                  ItemPlanComponent,
                  GrillaComponent,
                  ItemDirective ],
  entryComponents: [ PlanesComponent, EquiposComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

