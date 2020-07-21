import { Injectable } from '@angular/core';

import { PlanesComponent } from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/planes.component';
import { EquiposComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { CatalogoComponent } from './catalogo';

@Injectable()
export class CatalogoService {
  getAds() {
    return [
      new CatalogoComponent(EquiposComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new CatalogoComponent(PlanesComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),
    ];
  }
}
