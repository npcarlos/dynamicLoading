import { CatalogoRenderTemplate } from '../../../../../src/app/catalogo.component';
import { ItemTemplate } from '../../../../../src/app/modules/visual-components/item.interface';
import { FiltroTemplate } from '~libraries/domain/common/filtro';
import { Component } from '@angular/core';

export interface ParametrosTipoCatalogo{
    nombreCatalogo: string,
    // TODO verificar tipos de datos CatalogoTemplate
    // listaItems: any,
    visualCatalogComponent?: CatalogoRenderTemplate,
    visualItemComponent?: ItemTemplate,
    filtros: FiltroTemplate[],
}