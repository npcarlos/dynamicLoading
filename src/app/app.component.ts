import { Component, OnInit } from '@angular/core';

import { CatalogoService }         from '../../externals/modules/business/dummy/catalogo.service';
import { CatalogoItem }            from './catalogo-item';
import { TipoCatalogoModel } from 'externals/libraries/domain/fullstack/catalogo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  catalogos: CatalogoItem[];
  tiposCatalogos: TipoCatalogoModel[];
  catalogoActual: number;
  interval: any;

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit() {
    this.catalogos = this.catalogoService.getAds();
    this.tiposCatalogos = this.catalogoService.getTipoCatalogos();
    this.catalogoActual = 0;

    this.interval = setInterval(() => {
      this.cargarCatalogoActual();
    }, 3000);
  }


  
  cargarCatalogoActual() {
    this.catalogoActual = (this.catalogoActual + 1) % this.tiposCatalogos.length;
    

  }


}

