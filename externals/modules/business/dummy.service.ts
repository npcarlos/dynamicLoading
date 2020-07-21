import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }
  
  darInformacionPlanes(){
    const planes = [
      {name: "Plan 50GB"},
      {name: "Plan 120GB"},
      {name: "Plan 100GB"}
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
