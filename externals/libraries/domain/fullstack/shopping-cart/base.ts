import { CatalogoModel } from '~libraries/domain/fullstack/catalogo/catalogo';

export class ShoppingCartItemTemplate<M extends CatalogoModel> {
  item: M;

  cantidad: number;
  configuraciones: { [configurationName: string]: string };

  constructor(item: M, cantidad: number, configuraciones: { [configurationName: string]: string } = {}) {
    this.item = item;
    this.cantidad = cantidad;
    this.configuraciones = configuraciones;
  }

  // Métodos de precio
  darPrecioTotal(): number {
    return this.item.darPrecio() * this.cantidad;
  }

  darImpuestosTotales(): number {
    return this.item.darImpuestos() * this.cantidad;
  }

  darAntesDeImpuestosTotales(): number {
    return this.item.darAntesDeImpuestos() * this.cantidad;
  }
}
