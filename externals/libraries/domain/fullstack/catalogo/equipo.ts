import { CatalogoTemplate, CatalogoModel } from './catalogo';

export interface EquipoTemplate extends CatalogoTemplate {
  color1: string;
  color2?: string;
  tipo: string;
}

export class EquipoModel extends CatalogoModel implements EquipoTemplate {
  color1: string;
  color2?: string;
  tipo: string;

  caracteristicas: string[] = [
    'CamaraPosterior',
    'GPS',
    'Peso',
    'Procesador',
    'Frecuencias',
    'NFC',
    'Radio',
    'Pantalla',
    'SistemaOperativo',
    'UMTS',
    'MemoriaExterna',
    'Altavoz',
    'Bluetooth',
    'WiFi',
    'CamaraFrontal',
    'DimensionDisplay',
    'DimensionEquipo',
    'ModeloEquipos',
    'TecnologiaEquipos',
    'FabricanteEquipos',
    'MemoriaInterna',
    'CodigoMaterial',
  ];
}
