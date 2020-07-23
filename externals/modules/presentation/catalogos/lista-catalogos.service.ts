import { Injectable } from '@angular/core';
import { TipoCatalogoItem } from 'src/app/catalogo-item';
import { CatalogoPlanesComponent } from 'src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes.component';
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';
import { CatalogoEquiposComponent } from 'src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos.component';
import { ItemEquipoComponent } from 'src/app/modules/visual-components/item-equipo/item-equipo.component';
import { CatalogoTecnologiasComponent } from 'src/app/modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias.component';
import { ItemTecnologiaComponent } from 'src/app/modules/visual-components/item-tecnologia/item-tecnologia.component';
import { CatalogoAudioComponent } from 'src/app/modules/ventas-vistas/catalogo-audio/catalogo-audio.component';
import { ItemAudioComponent } from 'src/app/modules/visual-components/item-audio/item-tecnologia.component';

@Injectable({
  providedIn: 'root',
})
export class ListaCatalogosService {
  
  tiposCatalogo: any

  // Constructor
  constructor() {
    const parametrosPlanes = {
      name: 'Planes',
      visualCatalogComponent: CatalogoPlanesComponent,
      visualItemComponent: ItemPlanComponent,
      filtros: [],
      informacionOpcional:{}
    }

    
    const parametrosEquipos = {
      name: 'Equipos',
      visualCatalogComponent: CatalogoEquiposComponent,
      visualItemComponent: ItemEquipoComponent,
      filtros: [],
      informacionOpcional:{}
    }

    
    const parametrosTecnologia = {
      name: 'Tecnologías',
      visualCatalogComponent: CatalogoTecnologiasComponent,
      visualItemComponent: ItemTecnologiaComponent,
      filtros: [],
      informacionOpcional:{}
    }

    
    const parametrosAudio = {
      name: 'Audio',
      visualCatalogComponent: CatalogoAudioComponent,
      visualItemComponent: ItemAudioComponent,
      filtros: [],
      informacionOpcional:{
        promocionesIVA: {
          texto:"19% OFF",
          banner: "iva.png"
        }
      }
    }
    this.tiposCatalogo =  [
      // TODO Revisar el nombre TipoCatalogoItem
      
      new TipoCatalogoItem(parametrosPlanes),
      new TipoCatalogoItem(parametrosEquipos),
      new TipoCatalogoItem(parametrosTecnologia),
      new TipoCatalogoItem(parametrosAudio),
    ];
  }
  

  
  getTiposCatalogo() {
    return this.tiposCatalogo;
  }

}
