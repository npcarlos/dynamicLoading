import { Type } from '@angular/core';
import { CatalogoAudioRenderComponent } from './modules/ventas-vistas/catalogo-audio/catalogo-audio-render.component';
import { ItemAudioComponent } from './modules/visual-components/item-audio/item-tecnologia.component';
import { CatalogoRenderTemplate } from './catalogo.component';
import { ItemTemplate } from './modules/visual-components/item.interface';

export class TipoCatalogoItem {

  public nombreTipoCatalogo: string;

  public visualCatalogComponent: CatalogoRenderTemplate;
  
  public visualItemComponent: ItemTemplate;

  // TODO Ítems a mostrar, función para traer datos actualizados
  // Filtros.
  constructor(public parametrosCatalogo: any) {
    this.nombreTipoCatalogo = parametrosCatalogo.catalogName;
    this.visualCatalogComponent = parametrosCatalogo.visualCatalogComponent;
    this.visualItemComponent = parametrosCatalogo.visualItemComponent;

    console.log(`Creando el catálogo ${this.nombreTipoCatalogo}`)
  }
}
