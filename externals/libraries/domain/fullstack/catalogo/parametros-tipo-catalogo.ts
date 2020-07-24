import { FiltroTemplate } from '~libraries/domain/common/filtro';

export interface ParametrosTipoCatalogo{

    // TODO Verificar Tipos
    nombreCatalogo: string,
    // visualCatalogComponent: CatalogoRenderTemplate,
    visualCatalogComponent: any,
    // visualItemComponent: ItemTemplate,
    visualItemComponent: any,
    filtros: FiltroTemplate[],
}