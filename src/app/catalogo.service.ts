import { Injectable } from '@angular/core';

import { PlanesComponent } from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/planes.component';
import { EquiposComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { CatalogoItem } from './catalogo-item';

@Injectable()
export class CatalogoService {
  getAds() {
    return [
      new CatalogoItem(EquiposComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new CatalogoItem(PlanesComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),
    ];
  }
}
