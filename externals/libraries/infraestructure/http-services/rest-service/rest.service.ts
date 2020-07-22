import { Observable } from 'rxjs';

import { EntityModel, EntityTemplate } from '~libraries/domain/base';
import { RestServiceParser, RestIntegrationService } from '~modules/infraestructure/claro-http-module';

/**
 *
 */
export abstract class RestServiceTemplate<
  T extends EntityTemplate,
  M extends EntityModel<T>
> extends RestServiceParser {
  /**
   *
   * @param restIntegrationService
   * @param alias
   *
   */
  constructor(protected restIntegrationService: RestIntegrationService, alias: string) {
    super(alias);
  }

  // --------------------------------------------------------------------
  // --------------------------------------------------------------------
  // Basic Query Methods
  // --------------------------------------------------------------------
  // --------------------------------------------------------------------
  /**
   *
   * @param args
   */
  listItems(params: any, ...args: any[]): Observable<M[]> {
    return this.restIntegrationService.get<T[], M[]>(this, 'listItems', params, ...args);
  }

  /**
   *
   * @param id
   * @param args
   */
  getItem(id: string, ...args: any[]): Observable<M> {
    return this.restIntegrationService.get<T, M>(this, 'getItem', {}, id, {}, ...args);
  }

  /**
   *
   * @param entity
   * @param args
   */
  createItem(entity: M, ...args: any[]): Observable<M> {
    return this.restIntegrationService.post<T, M>(this, 'createItem', entity.toJSON(), ...args);
  }

  /**
   *
   * @param entity
   * @param args
   */
  updateItem(entity: M, ...args: any[]): Observable<M> {
    return this.restIntegrationService.put<T, M>(this, 'updateItem', entity.toJSON(), ...args);
  }

  /**
   *
   * @param entity
   * @param args
   */
  deleteItem(id: string, ...args: any[]): Observable<M> {
    return this.restIntegrationService.delete<T, M>(this, 'deleteItem', id, ...args);
  }

  // --------------------------------------------------------------------
  // --------------------------------------------------------------------
  // Basic Query Methods URL Builders
  // --------------------------------------------------------------------
  // --------------------------------------------------------------------

  /**
   *
   * @param urlParams The parameters to use to build the URL
   */
  buildGetItemURL(url: string, ...urlParams: any[]): string {
    const id = urlParams.shift();
    return `${url}/${id}`;
  }

  /**
   *
   * @param urlParams The parameters to use to build the URL
   */
  buildUpdateItemURL(url: string, ...urlParams: any[]): string {
    const entity: M = urlParams.shift();
    return `${url}/${entity.id}`;
  }

  /**
   *
   * @param urlParams The parameters to use to build the URL
   */
  buildDeleteItemURL(url: string, ...urlParams: any[]): string {
    const id = urlParams.shift();
    return `${url}/${id}`;
  }

  /**
   *
   * @param response
   */
  abstract parseResponse(response: T): M;
}
