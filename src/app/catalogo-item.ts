import { Type } from '@angular/core';
import { CatalogoAudioComponent } from './modules/ventas-vistas/catalogo-audio/catalogo-audio.component';
import { ItemAudioComponent } from './modules/visual-components/item-audio/item-tecnologia.component';

export class TipoCatalogoItem {

  nombreTipoCatalogo: string;

  visualCatalogComponent: CatalogoAudioComponent;
  
  visualItemComponent: ItemAudioComponent;

  // TODO Ítems a mostrar, función para traer datos actualizados
  // Filtros.
  constructor(public parametrosCatalogo: any) {
    this.nombreTipoCatalogo = parametrosCatalogo.nombreTipoCatalogo;
    this.visualCatalogComponent = parametrosCatalogo.visualCatalogComponent;
    this.visualItemComponent = parametrosCatalogo.visualItemComponent;
  }
}
