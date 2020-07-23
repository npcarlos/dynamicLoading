import { VisualCatalogoTemplate } from './catalogo.component';
import { ItemTemplate } from './modules/visual-components/item.interface';

export interface ParametrosTipoCatalogo{
    name: string,
    listaItems: any, // TODO verificar tipos de datos CatalogoTemplate
    visualCatalogComponent: VisualCatalogoTemplate,
    visualItemComponent: ItemTemplate,
    filtros: [],
    informacionOpcional:{}
}