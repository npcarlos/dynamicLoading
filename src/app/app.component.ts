import { Component, OnInit } from '@angular/core';

import { CatalogoService }         from '../../externals/modules/business/dummy/catalogo.service';
import { TipoCatalogoItem }            from './catalogo-item';
import { TipoCatalogoModel } from 'externals/libraries/domain/fullstack/catalogo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  catalogos: TipoCatalogoItem[];
  tiposCatalogos: TipoCatalogoModel[];
  interval: any;


  catalogoSeleccionado: TipoCatalogoItem

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit() {
    this.catalogos = this.catalogoService.getTiposCatalogo();
    this.actualizarCatalogo(0);
  }

  public actualizarCatalogo(indiceCatalogoNuevo: number) {
    this.catalogoSeleccionado = this.catalogos[indiceCatalogoNuevo];
  }

}

