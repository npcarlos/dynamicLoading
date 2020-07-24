import { CatalogoRenderTemplate } from './catalogo.component';
import { ItemTemplate } from '../item.interface';
import { FiltroTemplate } from '~libraries/domain/common/filtro';
import { ParametrosTipoCatalogo } from '~libraries/domain/fullstack/catalogo/parametros-tipo-catalogo';

export class TipoCatalogoVista {

  public nombreTipoCatalogo: string;

  public visualCatalogComponent: CatalogoRenderTemplate;
  
  public visualItemComponent: ItemTemplate;

  public filtros: FiltroTemplate[];

  // TODO Ítems a mostrar, función para traer datos actualizados
  // Filtros.
  constructor(public parametrosCatalogo: ParametrosTipoCatalogo) {
    this.nombreTipoCatalogo = parametrosCatalogo.nombreCatalogo;
    this.visualCatalogComponent = parametrosCatalogo.visualCatalogComponent;
    this.visualItemComponent = parametrosCatalogo.visualItemComponent;
    this.filtros = parametrosCatalogo.filtros;

    console.log(`Creando el catálogo ${this.nombreTipoCatalogo}`)
  }
}
