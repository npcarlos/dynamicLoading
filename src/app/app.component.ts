import { Component, OnInit } from '@angular/core';

import { CatalogoService }         from './catalogo.service';
import { CatalogoItem }            from './catalogo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  catalogos: CatalogoItem[];

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit() {
    this.catalogos = this.catalogoService.getAds();
  }
}

