import { Component, OnInit } from '@angular/core';

import { CatalogoService }         from './catalogo.service';
import { CatalogoComponent }            from './catalogo';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-catalogo-banner [catalogos]="catalogos"></app-catalogo-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  catalogos: CatalogoComponent[];

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit() {
    this.catalogos = this.catalogoService.getAds();
  }
}

