
import { Injectable } from '@angular/core';

import { CatalogoPlanesRenderComponent } from '../../../../src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/catalogo-planes-render.component';
import { CatalogoEquiposRenderComponent } from '../../../../src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/catalogo-equipos-render.component';
import { TipoCatalogoItem  } from '../../../../src/app/catalogo-item';

import { TipoCatalogoModel, PlanModel, PlanTemplate } from '../../../libraries/domain/fullstack/catalogo'
import { ItemPlanComponent } from 'src/app/modules/visual-components/item-plan/item-plan.component';
import { ItemEquipoComponent } from 'src/app/modules/visual-components/item-equipo/item-equipo.component';
import { CatalogoTecnologiasRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-tecnologias/catalogo-tecnologias-render.component';
import { ItemTecnologiaComponent } from 'src/app/modules/visual-components/item-tecnologia/item-tecnologia.component';
import { ParametrosTipoCatalogo } from 'src/app/parametros-tipo-catalogo';
import { CatalogoAudioRenderComponent } from 'src/app/modules/ventas-vistas/catalogo-audio/catalogo-audio-render.component';
import { ItemAudioComponent } from 'src/app/modules/visual-components/item-audio/item-tecnologia.component';
import { Store } from '@ngrx/store';

@Injectable()
export class CatalogoService {
  

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

  getPlanes()
  {
    return [
      {
        name: "Plan 5GB",
        description: "descripción del plan de 5GB",
        tipoPlan: 'Datos',
        amount: 30000,
        taxes: 0.19,
        image: "/public/images/plan1.png"
      },
      {
        name: "Plan 10GB",
        description: "descripción del segundo plan de 10GB",
        amount: 50000,
        tipoPlan: 'Voz y Datos',
        taxes: 0.19,
        image: "/public/images/plan2.png"
      },
      {
        name: "Plan Ilimitado",
        description: "descripción del tercer plan, ilimitado",
        amount: 140000,
        tipoPlan: 'Voz',
        taxes: 0.19,
        image: "/public/images/plan3.png"
      },
      {
        name: "Plan 5GB - Solo voz",
        description: "descripción del plan de 5GB",
        tipoPlan: 'Voz',
        amount: 30000,
        taxes: 0.19,
        image: "/public/images/plan1.png"
      },
      {
        name: "Plan 10GB",
        description: "descripción del segundo plan de 10GB",
        amount: 50000,
        tipoPlan: 'Voz y Datos',
        taxes: 0.19,
        image: "/public/images/plan2.png"
      },
      {
        name: "Plan Ilimitado",
        description: "descripción del tercer plan, ilimitado",
        amount: 140000,
        tipoPlan: 'Voz',
        taxes: 0.19,
        image: "/public/images/plan3.png"
      }
    ]
  }

  getEquipos(){
    return [
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
  }

  getTecnologias()
  {
    return [
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
  }
  getAudio()
  {
    return [
      {
        name: "Parlantes",
        description: "Suenan bien",
        amount: 300000,
        taxes: 0.19,
        image: "/public/images/portátil1.png"
      },
      {
        name: "Barra de sonido",
        description: "La mejor consola del mundo mundial",
        amount: 700000,
        taxes: 0.19,
        image: "/public/images/Consola2.png"
      }
    ]
    
  }
}