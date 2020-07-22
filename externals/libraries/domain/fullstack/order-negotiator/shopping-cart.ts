import { EntityTemplate, EntityModel } from '~libraries/domain/base';
import { CatalogoModel } from '../catalogo';

export interface PoItemPriceDetailsTemplate {
  amount: number;
  name: string;
  poID: string;
}

export interface PoItemTemplate {
  catalogoItem?: CatalogoModel;
  itemID: string;
  poID: string;
  priceDetails: PoItemPriceDetailsTemplate[];
}

export interface PoTemplate {
  catalogoItem?: CatalogoModel;
  instancias: PoTemplate[];
  itemParentId: string;
  items: PoItemTemplate[];
  poIdMain?: string;
  quantity?: number;
}

export class PoModel implements PoTemplate {
  catalogoItem?: CatalogoModel;
  instancias: PoTemplate[];
  itemParentId: string;
  items: PoItemTemplate[];
  poIdMain?: string;
  quantity?: number;
  totalImpuestos: number;
  private _totalConImpuestos: number;
  total: number;
  constructor(item: PoTemplate) {
    this.catalogoItem = item.catalogoItem;
    this.instancias = [];
    this.itemParentId = item.itemParentId;
    this.items = item.items;
    this.poIdMain = item.poIdMain;
    this.quantity = item.quantity;
    this._totalConImpuestos = 0;
    this.totalImpuestos = 0;
    this.total = 0;
    this.calcularValorItems();
  }

  // Atributo inmutable
  get totalSinImpuestos() {
    return this._totalConImpuestos - this.totalImpuestos;
  }

  get totalConImpuestos() {
    return this._totalConImpuestos;
  }

  calcularValorItems() {
    this.items.forEach((item) => {
      if (item.priceDetails.length > 0) {
        this._totalConImpuestos += this.calcularTotalConImpuestos(item);
        this.totalImpuestos += this.calcularTotalImpuestos(item);
        this.total = this._totalConImpuestos * this.quantity;
      }
    });
  }

  calcularTotalConImpuestos(item: PoItemTemplate) {
    return item.priceDetails
      .map((item) => item.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  calcularTotalImpuestos(item: PoItemTemplate) {
    return item.priceDetails
      .filter((itemImpuesto) => itemImpuesto.poID.includes('Tax'))
      .map((item) => item.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export interface ShoppingCartTemplate extends EntityTemplate {
  scID: string;
  quoteID: string;
  items: PoTemplate[];
  status?: string;
}

export class ShoppingCartModel extends EntityModel<ShoppingCartTemplate> implements ShoppingCartTemplate {
  scID: string;
  quoteID: string;
  status?: string;
  items: PoTemplate[];
  private itemsSeparados: { [key: string]: PoModel[] } = {};
  totalShoppingCart: number;
  totalImpuestosShoppingCart: number;
  totalSinImpuestosShoppingCart: number;
  totalItemsShoppingCart: number;

  onBuildTemplateFieldItems(attributeName: string, template: ShoppingCartTemplate) {
    return this.buildAttribute(attributeName, template, undefined, undefined, (_items: PoTemplate[]) => {
      this._data.items = _items || [];
      this.separarListaItems();
    });
  }

  calcularTotalesShoppingCart() {
    this.totalShoppingCart = 0;
    this.totalImpuestosShoppingCart = 0;
    this.totalSinImpuestosShoppingCart = 0;
    this.totalItemsShoppingCart = 0;

    if (this.itemsSeparados) {
      Object.values(this.itemsSeparados).forEach((itemArray) => {
        this.totalShoppingCart += this.calcularTotalShoppingCart(itemArray);
        this.totalImpuestosShoppingCart += this.calcularTotalImpuestosShoppingCart(itemArray);
        this.totalSinImpuestosShoppingCart += this.calcularTotalSinImpuestosShoppingCart(itemArray);
        this.totalItemsShoppingCart += this.calcularTotalItemsShoppingCart(itemArray);
      });
    }
  }

  calcularTotalShoppingCart(itemArray: PoModel[]) {
    return itemArray.map((item) => item.total).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  calcularTotalImpuestosShoppingCart(itemArray: PoModel[]) {
    return itemArray
      .map((item) => item.totalImpuestos * item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  calcularTotalSinImpuestosShoppingCart(itemArray: PoModel[]) {
    return itemArray
      .map((item) => item.totalSinImpuestos * item.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  calcularTotalItemsShoppingCart(itemArray: PoModel[]) {
    return itemArray.map((item) => item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  get planes() {
    return this.filterByTypeName(['plan']);
  }

  get equipos() {
    return this.filterByTypeName(['telefono']);
  }

  get tecnologias() {
    return this.filterByTypeName([], ['plan', 'telefono']);
  }

  private separarListaItems() {
    this.items.forEach((item) => {
      item.quantity = this.items.filter((nItem) => nItem.poIdMain === item.poIdMain).length;

      let lista: PoModel[] = [];
      if (item.catalogoItem) {
        const tipo = item.catalogoItem.darTipo();

        // 1. Busca si el tipo está en la lista
        if (!this.itemsSeparados[tipo]) {
          this.itemsSeparados[tipo] = [];
        }
        lista = this.itemsSeparados[tipo];

        // 2. Valida si el item existe, si no existe lo agrega
        let itemLista = lista.find((nItem) => item.poIdMain === nItem.poIdMain);
        if (!itemLista) {
          const model = new PoModel(item);
          lista.push(model);
          itemLista = model;
        }

        // 3. Vincula las instancias
        itemLista.instancias.push(item);
      }
    });
    this.calcularTotalesShoppingCart();
  }

  private filterByTypeName(include: string[], exclude: string[] = []): PoModel[] {
    return Object.keys(this.itemsSeparados)
      .filter(
        (itemsKey) =>
          ((include.length > 0 && include.find((key) => key === itemsKey)) || include.length === 0) &&
          !exclude.find((key) => key === itemsKey)
      )
      .reduce((previous, current) => previous.concat(this.itemsSeparados[current] || []), []);
  }
}

export interface ShoppingCartResponseTemplate {
  ok: string;
  messagge: string;
  body: ShoppingCartTemplate;
}
