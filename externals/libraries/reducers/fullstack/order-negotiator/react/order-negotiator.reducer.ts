import { Map } from 'immutable';
import { reducerObject, initialState } from '../core/order-negotiator.reducer';

export function reducer(state: Map<string, any> = initialState, action: { type: string }): Map<string, any> {
  const actionFunction = reducerObject[action.type] || ((state) => state);
  return actionFunction(state, action);
}
