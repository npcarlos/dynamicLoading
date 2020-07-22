import { CatalogoTemplate, CatalogoModel } from './catalogo';

export interface PlanTemplate extends CatalogoTemplate {}

export class PlanModel extends CatalogoModel implements PlanTemplate {
  caracteristicas: string[] = [
    'TipoServicio',
    'DatosMovilComercial',
    'SmsMovilComercial',
    'VozMovilComercial',
    'SegmentoTarifario',
  ];

  caracteristicasConfigurables: string[] = ['TipoPlan'];
}
