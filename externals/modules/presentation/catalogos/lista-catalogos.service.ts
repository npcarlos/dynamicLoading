import { Injectable } from '@angular/core';
import { CatalogoPlanesRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes-render.component';
import { ItemPlanComponent } from 'src/app/modules/visual-components/elementos/item-plan/item-plan.component';
import { CatalogoEquiposRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos-render.component';
import { ItemEquipoComponent } from 'src/app/modules/visual-components/elementos/item-equipo/item-equipo.component';
import { CatalogoTecnologiasRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias-render.component';
import { ItemTecnologiaComponent } from 'src/app/modules/visual-components/elementos/item-tecnologia/item-tecnologia.component';
import { CatalogoAudioRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-audio/catalogo-audio-render.component';
import { ItemAudioComponent } from 'src/app/modules/visual-components/elementos/item-audio/item-tecnologia.component';
import { TipoCatalogoModel, ParametrosTipoCatalogo } from '~libraries/domain/fullstack/catalogo';
import { CatalogoVideoRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-video/catalogo-video-render.component';
import { TipoCatalogoVista } from 'src/app/modules/visual-components/elementos/catalogo-generico/catalogo-item';

@Injectable({
  providedIn: 'root',
})
export class ListaCatalogosService {
  
  tiposCatalogo: any

  // Constructor
  constructor() {
    const parametrosPlanes: ParametrosTipoCatalogo= {
      nombreCatalogo: 'Planes',
      visualCatalogComponent: CatalogoPlanesRenderComponent,
      visualItemComponent: ItemPlanComponent,
      filtros: [],
    }

    
    const parametrosEquipos: ParametrosTipoCatalogo= {
      nombreCatalogo: 'Equipos',
      visualCatalogComponent: CatalogoEquiposRenderComponent,
      visualItemComponent: ItemEquipoComponent,
      filtros: [],
    }

    
    const parametrosTecnologia: ParametrosTipoCatalogo= {
      nombreCatalogo: 'Tecnologías',
      visualCatalogComponent: CatalogoTecnologiasRenderComponent,
      visualItemComponent: ItemTecnologiaComponent,
      filtros: [],
    }

    
    const parametrosAudio: ParametrosTipoCatalogo = {
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
      new TipoCatalogoVista({
        nombreCatalogo: 'Video',
        visualCatalogComponent: CatalogoVideoRenderComponent,
        visualItemComponent: ItemAudioComponent,
        filtros: []
      })
    ];
  }
  

  
  getTiposCatalogo() {
    return this.tiposCatalogo;
  }

}
