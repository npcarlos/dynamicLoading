import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }         from './app.component';
import { CatalogoPlanesComponent }   from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes.component';
import { VistaCatalogoGenericoComponent }    from './modules/visual-components/catalogo-generico/vista-catalogo-generico.component';
import { CatalogoEquiposComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos.component';
import { CatalogoDirective }          from './catalogo.directive';
import { GrillaComponent } from './modules/visual-components/grilla/grilla.component';
import { ItemEquipoComponent } from './modules/visual-components/item-equipo/item-equipo.component';
import { ItemPlanComponent } from './modules/visual-components/item-plan/item-plan.component';
import { ItemDirective } from './modules/visual-components/item.directive';
import { CatalogoService }            from '../../externals/modules/business/dummy/catalogo.service';
import { CatalogoPlanesRepoModule } from './modules/ventas-vistas/catalogo-planes-repo/catalogo-planes.module';
import { CatalogoTecnologiasComponent } from './modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias.component';
import { ItemTecnologiaComponent } from './modules/visual-components/item-tecnologia/item-tecnologia.component';
import { CatalogoAudioComponent } from './modules/ventas-vistas/catalogo-audio/catalogo-audio.component';
import { ItemAudioComponent } from './modules/visual-components/item-audio/item-tecnologia.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [CatalogoService],
  declarations: [ AppComponent,
                  VistaCatalogoGenericoComponent,
                  CatalogoPlanesComponent,
                  CatalogoEquiposComponent,
                  CatalogoTecnologiasComponent,
                  CatalogoAudioComponent,
                  CatalogoDirective,
                  ItemEquipoComponent,
                  ItemPlanComponent,
                  ItemTecnologiaComponent,
                  ItemAudioComponent,
                  GrillaComponent,
                  ItemDirective,
                  ],
  entryComponents: [ CatalogoPlanesComponent, CatalogoEquiposComponent, CatalogoTecnologiasComponent, CatalogoAudioComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

