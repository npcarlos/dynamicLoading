import { EntityTemplate } from '../../base';
import { CatalogoModel } from './catalogo';

export interface TipoCatalogoTemplate extends EntityTemplate {
    nombreTipoCatalogo: string;
    
    itemsCatalogo: CatalogoModel[];
}


export class TipoCatalogoModel implements TipoCatalogoTemplate {
    
    constructor(public nombreTipoCatalogo: string, public itemsCatalogo: any[]) {}

  }