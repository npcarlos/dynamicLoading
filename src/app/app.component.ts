import { Component, OnInit } from '@angular/core';

import { CatalogoService }         from './catalogo.service';
import { CatalogoComponent }            from './catalogo';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner [catalogos]="ads"></app-ad-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: CatalogoComponent[];

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit() {
    this.ads = this.catalogoService.getAds();
  }
}

