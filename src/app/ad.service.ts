import { Injectable }           from '@angular/core';

import { PlanesComponent }   from './planes/planes.component';
import { EquiposComponent } from './equipos/equipos.component';
import { CatalogoComponent }               from './catalogo';

@Injectable()
export class AdService {
  getAds() {
    return [
      new CatalogoComponent(EquiposComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new CatalogoComponent(EquiposComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new CatalogoComponent(PlanesComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new CatalogoComponent(PlanesComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
