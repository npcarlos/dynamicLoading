import { Component, OnInit } from '@angular/core';

import { TipoCatalogoVista }            from './catalogo-item';
import { TipoCatalogoModel } from 'externals/libraries/domain/fullstack/catalogo';
import { ListaCatalogosService } from '~modules/presentation/catalogos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  catalogos: TipoCatalogoVista[];
  tiposCatalogos: TipoCatalogoModel[];


  catalogoSeleccionado: TipoCatalogoVista

  constructor(private catalogoService: ListaCatalogosService) {}

  ngOnInit() {
    this.catalogos = this.catalogoService.getTiposCatalogo();
    this.actualizarCatalogo(0);
  }

  public actualizarCatalogo(indiceCatalogoNuevo: number) {
    this.catalogoSeleccionado = this.catalogos[indiceCatalogoNuevo];
  }

}

