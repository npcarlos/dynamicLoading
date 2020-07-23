import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }         from './app.component';
import { CatalogoPlanesRenderComponent }   from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes-render.component';
import { VistaCatalogoGenericoComponent }    from './modules/visual-components/catalogo-generico/vista-catalogo-generico.component';
import { CatalogoEquiposRenderComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos-render.component';
import { CatalogoDirective }          from './catalogo.directive';
import { GrillaComponent } from './modules/visual-components/grilla/grilla.component';
import { ItemEquipoComponent } from './modules/visual-components/item-equipo/item-equipo.component';
import { ItemPlanComponent } from './modules/visual-components/item-plan/item-plan.component';
import { ItemDirective } from './modules/visual-components/item.directive';
import { CatalogoService }            from '../../externals/modules/business/dummy/catalogo.service';
import { CatalogoTecnologiasRenderComponent } from './modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias-render.component';
import { ItemTecnologiaComponent } from './modules/visual-components/item-tecnologia/item-tecnologia.component';
import { CatalogoAudioRenderComponent } from './modules/ventas-vistas/catalogo-audio/catalogo-audio-render.component';
import { ItemAudioComponent } from './modules/visual-components/item-audio/item-tecnologia.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [CatalogoService],
  declarations: [ AppComponent,
                  VistaCatalogoGenericoComponent,
                  CatalogoPlanesRenderComponent,
                  CatalogoEquiposRenderComponent,
                  CatalogoTecnologiasRenderComponent,
                  CatalogoAudioRenderComponent,
                  CatalogoDirective,
                  ItemEquipoComponent,
                  ItemPlanComponent,
                  ItemTecnologiaComponent,
                  ItemAudioComponent,
                  GrillaComponent,
                  ItemDirective,
                  ],
  entryComponents: [ CatalogoPlanesRenderComponent, CatalogoEquiposRenderComponent, CatalogoTecnologiasRenderComponent, CatalogoAudioRenderComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

