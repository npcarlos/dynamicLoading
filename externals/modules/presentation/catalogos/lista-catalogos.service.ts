import { Injectable } from '@angular/core';
import { TipoCatalogoVista } from 'src/app/catalogo-item';
import { CatalogoPlanesRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes-render.component';
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';
import { CatalogoEquiposRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos-render.component';
import { ItemEquipoComponent } from 'src/app/modules/visual-components/item-equipo/item-equipo.component';
import { CatalogoTecnologiasRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias-render.component';
import { ItemTecnologiaComponent } from 'src/app/modules/visual-components/item-tecnologia/item-tecnologia.component';
import { CatalogoAudioRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-audio/catalogo-audio-render.component';
import { ItemAudioComponent } from 'src/app/modules/visual-components/item-audio/item-tecnologia.component';

@Injectable({
  providedIn: 'root',
})
export class ListaCatalogosService {
  
  tiposCatalogo: any

  // Constructor
  constructor() {
    const parametrosPlanes = {
      nombreCatalogo: 'Planes',
      visualCatalogComponent: CatalogoPlanesRenderComponent,
      visualItemComponent: ItemPlanComponent,
      filtros: [],
    }

    
    const parametrosEquipos = {
      nombreCatalogo: 'Equipos',
      visualCatalogComponent: CatalogoEquiposRenderComponent,
      visualItemComponent: ItemEquipoComponent,
      filtros: [],
    }

    
    const parametrosTecnologia = {
      nombreCatalogo: 'Tecnologías',
      visualCatalogComponent: CatalogoTecnologiasRenderComponent,
      visualItemComponent: ItemTecnologiaComponent,
      filtros: [],
    }

    
    const parametrosAudio = {
      nombreCatalogo: 'Audio',
      visualCatalogComponent: CatalogoAudioRenderComponent,
      visualItemComponent: ItemAudioComponent,
      filtros: []
      // informacionOpcional:{
      //   promocionesIVA: {
      //     texto:"19% OFF",
      //     banner: "iva.png"
      //   }
      // }
    }
    this.tiposCatalogo =  [
      // TODO Revisar el nombre TipoCatalogoItem
      
      new TipoCatalogoVista(parametrosPlanes),
      new TipoCatalogoVista(parametrosEquipos),
      new TipoCatalogoVista(parametrosTecnologia),
      new TipoCatalogoVista(parametrosAudio),
    ];
  }
  

  
  getTiposCatalogo() {
    return this.tiposCatalogo;
  }

}
