import { NgModule, ModuleWithProviders } from '@angular/core';
import { CatalogoPlanesRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes-render.component';
import { CatalogoAudioRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-audio/catalogo-audio-render.component';
import { CatalogoEquiposRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos-render.component';
import { CatalogoTecnologiasRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias-render.component';
import { CatalogoVideoRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-video/catalogo-video-render.component';
import { ItemAudioComponent } from 'src/app/modules/visual-components/elementos/item-audio/item-tecnologia.component';
import { ItemTecnologiaComponent } from 'src/app/modules/visual-components/item-tecnologia/item-tecnologia.component';
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';
import { ItemEquipoComponent } from 'src/app/modules/visual-components/item-equipo/item-equipo.component';

@NgModule({
  declarations: [
    // Rendes de catálogos
    CatalogoPlanesRenderComponent,
    CatalogoEquiposRenderComponent,
    CatalogoTecnologiasRenderComponent,
    CatalogoAudioRenderComponent,
    CatalogoVideoRenderComponent,

    // Items de catálogos
    ItemPlanComponent,
    ItemEquipoComponent,
    ItemTecnologiaComponent,
    ItemAudioComponent,],
  imports: [
  ],
})
export class ListaCatalogosModule {
  static forRoot(): ModuleWithProviders<ListaCatalogosModule> {
    return {
      ngModule: ListaCatalogosModule,
      providers: [
      ],
    };
  }
}
