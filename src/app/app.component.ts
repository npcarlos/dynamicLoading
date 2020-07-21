import { Component, OnInit } from '@angular/core';

import { AdService }         from './ad.service';
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

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

