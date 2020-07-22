
import { Injectable } from '@angular/core';

import { VistaCatalogoPlanesComponent } from '../../../../src/app/modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/vista-catalogo-planes.component';
import { EquiposComponent } from '../../../../src/app/modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { CatalogoItem } from '../../../../src/app/catalogo-item';

import { TipoCatalogoModel, PlanModel, PlanTemplate } from '../../../libraries/domain/fullstack/catalogo'

@Injectable()
export class CatalogoService {
  getAds() {
    return [
      new CatalogoItem(EquiposComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new CatalogoItem(VistaCatalogoPlanesComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),
    ];
  }

  getTipoCatalogos()
  {
    let planesDummy = [
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

    
    let equiposDummy = [
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
    return [
      new TipoCatalogoModel('Planes', planesDummy),
      new TipoCatalogoModel('Equipos', equiposDummy),
      
    ]
  }

  
}