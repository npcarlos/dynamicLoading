
import { Injectable } from '@angular/core';

import { VistaCatalogoPlanesComponent } from '../../../../src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/vista-catalogo-planes.component';
import { EquiposComponent } from '../../../../src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { TipoCatalogoItem  } from '../../../../src/app/catalogo-item';

import { TipoCatalogoModel, PlanModel, PlanTemplate } from '../../../libraries/domain/fullstack/catalogo'
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';
import { ItemEquipoComponent } from 'src/app/modules/visual-components/item-equipo/item-equipo.component';
import { CatalogoTecnologiasComponent } from 'src/app/modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias.component';

@Injectable()
export class CatalogoService {
  public planesDummy = [
    {
      name: "Plan 5GB",
      description: "descripción del plan de 5GB",
      amount: 30000,
      taxes: 0.19,
      image: "/public/images/plan1.png"
    },
    {
      name: "Plan 10GB",
      description: "descripción del segundo plan de 10GB",
      amount: 50000,
      taxes: 0.19,
      image: "/public/images/plan2.png"
    },
    {
      name: "Plan Ilimitado",
      description: "descripción del tercer plan, ilimitado",
      amount: 140000,
      taxes: 0.19,
      image: "/public/images/plan3.png"
    }
  ]

  public equiposDummy = [
    {
      name: "Celular 1",
      description: "Celular 1 con X de RAM, X de procesador y pantalla X",
      amount: 300000,
      taxes: 0.19,
      image: "/public/images/celular1.png"
    },
    {
      name: "Celular 2",
      description: "Celular 2 con X de RAM, X de procesador y pantalla X",
      amount: 700000,
      taxes: 0.19,
      image: "/public/images/celular2.png"
    },
    {
      name: "Celular 3",
      description: "Celular 3 con X de RAM, X de procesador y pantalla X",
      amount: 1300000,
      taxes: 0.19,
      image: "/public/images/celular3.png"
    }
  ]

  
  public tecnologiasDummy = [
    {
      name: "Computador portátil",
      description: "Computador muy chévere y rápido",
      amount: 300000,
      taxes: 0.19,
      image: "/public/images/portátil1.png"
    },
    {
      name: "Consola videojuegos",
      description: "La mejor consola del mundo mundial",
      amount: 700000,
      taxes: 0.19,
      image: "/public/images/Consola2.png"
    },
    {
      name: "TV Gigante",
      description: "Un TV súper gigante para ser feliz",
      amount: 1300000,
      taxes: 0.19,
      image: "/public/images/celular3.png"
    }
  ]

  getTiposCatalogo() {
    const parametrosPlanes = {
      name: 'Planes',
      listaItems: this.planesDummy,
      visualCatalogComponent: VistaCatalogoPlanesComponent,
      visualItemComponent: ItemPlanComponent,
      filtros: [],
      informacionOpcional:{}
    }

    
    const parametrosEquipos = {
      name: 'Equipos',
      listaItems: this.equiposDummy,
      visualCatalogComponent: EquiposComponent,
      visualItemComponent: ItemEquipoComponent,
      filtros: [],
      informacionOpcional:{}
    }

    
    const parametrosTecnologia = {
      name: 'Tecnologías',
      listaItems: this.tecnologiasDummy,
      visualCatalogComponent: CatalogoTecnologiasComponent,
      visualItemComponent: ItemEquipoComponent,
      filtros: [],
      informacionOpcional:{}
    }
    return [
      // TODO En vez de enviar planesDummy enviar las funciones que piden los datos actualizados.
      // TODO Revisar el nombre TipoCatalogoItem
      
      new TipoCatalogoItem(parametrosPlanes),
      new TipoCatalogoItem(parametrosEquipos),
      new TipoCatalogoItem(parametrosTecnologia),
    ];
  }

  // getTipoCatalogos()
  // {
  //   let planesDummy = [
  //     {
  //       name: "Plan 5GB",
  //       description: "descripción del plan de 5GB",
  //       amount: 30000,
  //       taxes: 0.19,
  //       image: "/public/images/plan1.png"
  //     },
  //     {
  //       name: "Plan 10GB",
  //       description: "descripción del segundo plan de 10GB",
  //       amount: 50000,
  //       taxes: 0.19,
  //       image: "/public/images/plan2.png"
  //     },
  //     {
  //       name: "Plan Ilimitado",
  //       description: "descripción del tercer plan, ilimitado",
  //       amount: 140000,
  //       taxes: 0.19,
  //       image: "/public/images/plan3.png"
  //     }
  //   ]

    
  //   let equiposDummy = [
  //     {
  //       name: "Celular 1",
  //       description: "Celular 1 con X de RAM, X de procesador y pantalla X",
  //       amount: 300000,
  //       taxes: 0.19,
  //       image: "/public/images/celular1.png"
  //     },
  //     {
  //       name: "Celular 2",
  //       description: "Celular 2 con X de RAM, X de procesador y pantalla X",
  //       amount: 700000,
  //       taxes: 0.19,
  //       image: "/public/images/celular2.png"
  //     },
  //     {
  //       name: "Celular 3",
  //       description: "Celular 3 con X de RAM, X de procesador y pantalla X",
  //       amount: 1300000,
  //       taxes: 0.19,
  //       image: "/public/images/celular3.png"
  //     }
  //   ]
  //   return [
  //     new TipoCatalogoModel('Planes', planesDummy),
  //     new TipoCatalogoModel('Equipos', equiposDummy),
  //   ]
  // }

  
}