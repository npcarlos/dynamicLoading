import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SettingsService } from '../../../modules/infraestructure/settings';
import { ErrorManagementService } from '../../../modules/infraestructure/error-management';

import { toCamelCase } from '../../../libraries/resources/string-utils';
import { tap, map, catchError } from 'rxjs/operators';
import { EventManagerService } from '../event-management';

/**
 *
 */
export abstract class RestServiceParser {
  private _alias: string;

  constructor(alias: string) {
    this._alias = alias;
  }

  get alias() {
    return this._alias;
  }

  /**
   *
   * @param response
   */
  public abstract parseResponse(response: any): any;

  /**
   *
   */
  public buildRequestURL(url: string): string {
    return url;
  }
}

/**
 *
 */
export type HttpOptions = {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
};

/**
 *
 */
@Injectable()
export class RestIntegrationService {
  private useMocks: boolean = true;

  constructor(
    public httpClient: HttpClient,
    public settings: SettingsService,
    public eventManager: EventManagerService,
    public errorManager: ErrorManagementService
  ) {
    //this.useMocks = this.settings.getConfiguration('useMocks', false);
  }

  // --------------------------------------------------------------------
  // --------------------------------------------------------------------
  // Method requests
  // --------------------------------------------------------------------
  // --------------------------------------------------------------------
  /**
   *
   * @param operationName
   * @param urlArgs
   */
  public get<R, S>(
    instance: RestServiceParser,
    operationName = 'get',
    data: any = undefined,
    ...urlArgs: any[]
  ): Observable<S> {
    return this.mapResponse<R, S>('get', data, instance, operationName, ...urlArgs);
  }

  /**
   *
   * @param operationName
   * @param data
   * @param urlArgs
   */
  public post<R, S>(
    instance: RestServiceParser,
    operationName = 'post',
    data: any = undefined,
    ...urlArgs: any[]
  ): Observable<S> {
    return this.mapResponse<R, S>('post', data, instance, operationName, ...urlArgs);
  }

  /**
   *
   * @param operationName
   * @param data
   * @param urlArgs
   */
  public put<R, S>(
    instance: RestServiceParser,
    operationName = 'put',
    data: any = undefined,
    ...urlArgs: any[]
  ): Observable<S> {
    return this.mapResponse<R, S>('put', data, instance, operationName, ...urlArgs);
  }
  /**
   *
   * @param operationName
   * @param data
   * @param urlArgs
   */
  public patch<R, S>(
    instance: RestServiceParser,
    operationName = 'patch',
    data: any = undefined,
    ...urlArgs: any[]
  ): Observable<S> {
    return this.mapResponse<R, S>('patch', data, instance, operationName, ...urlArgs);
  }

  /**
   *
   * @param operationName
   * @param urlArgs
   */
  public delete<R, S>(
    instance: RestServiceParser,
    operationName = 'delete',
    data: any = undefined,
    ...urlArgs: any[]
  ): Observable<S> {
    return this.mapResponse<R, S>('delete', data, instance, operationName, ...urlArgs);
  }

  /**
   *
   * @param url La URL del servicio
   * @param methodName El tipo de método a ejecutar
   * @param data Los datos a enviar
   * @param options Las opciones de la peticion
   */
  private request<R>(url: string, methodName: string, data: any = undefined, options: HttpOptions): Observable<R> {
    const method = methodName.toUpperCase() || 'GET';
    if (method === 'GET') {
      options.params = data || {};
    } else {
      options.body = data || {};
    }
    return this.httpClient.request(methodName, url, options);
  }

  /**
   * Procesa de forma genérica todas las peticiones
   * @param request La petición a procesar
   * @param operationName El nombre del método procesaro
   * @param parser El procesamiento de la respuesta
   */
  private mapResponse<R, S>(
    methodName: string,
    data: any = undefined,
    instance: RestServiceParser,
    operationName: string,
    ...urlArgs: any[]
  ): Observable<S> {
    const buildURL: (url: string, ...args: any) => string =
      (instance[`build${toCamelCase(operationName, false)}URL`] || instance.buildRequestURL).bind(instance) ||
      instance.buildRequestURL;
    const parser: (response: R) => S = (
      instance[`parse${toCamelCase(operationName, false)}Response`] || instance.parseResponse
    ).bind(instance);

    const url = buildURL(this.settings.getConfiguration(`${instance.alias}.url`), ...urlArgs);
    const options = urlArgs.length > 0 ? urlArgs.pop() : {};

    const event = {
      source: instance.alias,
      type: 'request',
      name: operationName,
      timestamp: new Date().getTime(),
    };

    const notifyEnd = () => {
      this.eventManager.notifyEvent({
        ...event,
        status: 'end',
      });
    };

    this.eventManager.notifyEvent({
      ...event,
      status: 'start',
    });

    const useMocks = this.settings.getConfiguration(`${instance.alias}.useMocks`, false);
    return (this.useMocks || useMocks
      ? instance[`${operationName}Mock`](data, ...urlArgs)
      : this.request(url, methodName, data || {}, options)
    ).pipe(
      tap(notifyEnd, notifyEnd),
      map<R, S>((response: R): S => parser(response)),
      catchError<S, Observable<S>>((err) => {
        this.errorManager.registerError({
          source: instance.alias,
          event: operationName,
          error: err,
        });
        throw err;
      })
    );
  }
}
