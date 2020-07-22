import { EntityModel, EntityTemplate } from '~libraries/domain/base';

export interface UbicacionTemplate {
  longitud: string;
  latitud: string;
  ciudad: string;
  direccion_sap: string;
  cod_logistica: string;
  departamento: string;
}

export interface CentroTemplate {
  tipo: string;
  ubicacion: UbicacionTemplate;
  descripcion_pac: string;
  tiempo: string;
  tiempo_entrega_domicilio: string;
  codigo_domicilio: string;
  cod_pac: string;
  nombre_sap: string;
  nodo: string;
  almacen: string;
  codigo_centro: string;
}


export interface CaracteristicasTemplate {
  valor: string;
  nombre: string;
}

export interface MaterialPadreTemplate {
  texto_comercial_material: string;
}

export interface StockTemplate {
  stock_libre_utilizacion: number;
  caracteristicas: CaracteristicasTemplate[];
  sociedad: string;
  lote: string;
  material_precio: string;
  reserva_poliedro: number;
  grupo_caracteristica: string;
  reserva_sap: number;
  id_caracteristica: string;
  material: string;
  denominacion_centro: string;
  texto_comercial_material: string;
  grupo_de_articulos: string;
  stock_disponible_venta: number;
  centro: CentroTemplate[];
  almacen: string;
  texto_breve_material: string;
  tipo_de_material: string;
  stock_consignacion: number;
  codigo_centro: string;
  material_padre: MaterialPadreTemplate[];
}

export interface StocksTemplate {
  stock: StockTemplate;
}

export interface DisponibilidadInventarioTemplate extends EntityTemplate {
  estado: string;
  mensaje: string;
  respuesta: StocksTemplate[];
}

export class DisponibilidadInventarioModel extends EntityModel<DisponibilidadInventarioTemplate>
  implements DisponibilidadInventarioTemplate {
  estado: string;
  mensaje: string;
  respuesta: StocksTemplate[];
}
