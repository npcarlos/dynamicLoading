import { Component, Input } from '@angular/core';

import { AdComponent }      from '../ad.component';

@Component({
  templateUrl: './planes.component.html',
})
export class PlanesComponent implements AdComponent {
  @Input() data: any;

}

