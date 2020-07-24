
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogoService {
  
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