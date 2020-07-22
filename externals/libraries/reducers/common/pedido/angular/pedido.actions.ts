import { createAction, props, ActionCreator } from '@ngrx/store';
import { ACTUALIZAR_PEDIDO_ACTION, FETCH_PEDIDO_ACTION } from '../core/pedido.constants';

import { PedidoModel } from '~libraries/domain/common/pedido';
import { ShoppingCartModel } from '~libraries/domain/fullstack/order-negotiator';
import { ClienteModel } from '~libraries/domain/common/cliente';
import { UsuarioModel } from '~libraries/domain/common/usuario';
import { DireccionModel } from '~libraries/domain/common/direccion';

// Acciones para actualizar el reducer (Los parámetros son los que definí en el reducer del core)
export const actualizarPedido = createAction(ACTUALIZAR_PEDIDO_ACTION, props<{ pedido: PedidoModel }>());

// Acciones para solicitar información al servidor (Los parámetros son los solicitados por el servicio de integración)
export const fetchPedido = createAction(
  FETCH_PEDIDO_ACTION,
  props<{ shoppingCart: ShoppingCartModel; cliente: ClienteModel; usuario: UsuarioModel; direccion: DireccionModel }>()
);

// Diccionario de las acciones que requiere el sistema
export const actionsObject: { [action: string]: ActionCreator } = {
  [ACTUALIZAR_PEDIDO_ACTION]: actualizarPedido,
  [FETCH_PEDIDO_ACTION]: fetchPedido,
};
