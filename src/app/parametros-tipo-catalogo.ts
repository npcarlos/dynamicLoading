import { CatalogoRenderTemplate } from './catalogo.component';
import { ItemTemplate } from './modules/visual-components/item.interface';

export interface ParametrosTipoCatalogo{
    name: string,
    listaItems: any, // TODO verificar tipos de datos CatalogoTemplate
    visualCatalogComponent: CatalogoRenderTemplate,
    visualItemComponent: ItemTemplate,
    filtros: [],
    informacionOpcional:{}
}