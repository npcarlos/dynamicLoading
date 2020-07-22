import { ShoppingCartPlanModel } from './plan';
import { ShoppingCartEquipoModel } from './equipo';
import { ShoppingCartTecnologiaModel } from './tecnologia';

export class ShoppingCartModel {
  planes: ShoppingCartPlanModel[];
  equipos: ShoppingCartEquipoModel[];
  tecnologias: ShoppingCartTecnologiaModel[];
}
