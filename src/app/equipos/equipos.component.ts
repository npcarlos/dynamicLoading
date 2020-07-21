import { Component, Input }  from '@angular/core';

import { AdComponent }       from '../ad.component';

@Component({
  templateUrl: './equipos.component.html'
})
export class EquiposComponent implements AdComponent {
  @Input() data: any;
}


