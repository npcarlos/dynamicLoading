import { CatalogoRenderTemplate } from '../../../../../src/app/catalogo.component';
import { ItemTemplate } from '../../../../../src/app/modules/visual-components/item.interface';
import { FiltroTemplate } from '~libraries/domain/common/filtro';
import { Type } from '@angular/core';

export interface ParametrosTipoCatalogo{

    // TODO Verificar Tipos
    nombreCatalogo: string,
    // visualCatalogComponent: CatalogoRenderTemplate,
    visualCatalogComponent: any,
    // visualItemComponent: ItemTemplate,
    visualItemComponent: any,
    filtros: FiltroTemplate[],
}