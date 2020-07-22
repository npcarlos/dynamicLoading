import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }
  
  darInformacionPlanes(){
    const planes = [
      {
        datosMoviles: "1 GB",
        nombrePlan: "Plan 1",
        precioPlan: "30.000",
        mensajesPlan: "ilimitado",
        minutosPlan: "ilimitado",
      },
      {
        datosMoviles: "8 GB",
        nombrePlan: "Plan 2",
        precioPlan: "50.000",
        mensajesPlan: "ilimitado",
        minutosPlan: "ilimitado",
      },
      {
        datosMoviles: "15 GB",
        nombrePlan: "Plan 3",
        precioPlan: "100.000",
        mensajesPlan: "ilimitado",
        minutosPlan: "ilimitado",
      }
    ]
    return planes;
  }

  darInformacionEquipos(){
    const equipos = [
      {name: "Celular 1"},
      {name: "Celular X2"},
      {name: "Celular S3"}
    ]
    return equipos;
  }

  darInformacionTecnologias(){
    const tecnologias = [
      {name: "PC portátil 1"},
      {name: "TV gigante 2"},
      {name: "consola Videjuegos S3"}
    ]
    return tecnologias;
  }

  darCatalogo(tipoCatalogo:string)
  {
    if( tipoCatalogo === 'planes')
    {
      return this.darInformacionPlanes()
    }
    else if( tipoCatalogo === 'equipos')
    {
      return this.darInformacionEquipos()
    }
    else if( tipoCatalogo === 'tecnologias')
    {
      return this.darInformacionTecnologias()
    }
  }
}
