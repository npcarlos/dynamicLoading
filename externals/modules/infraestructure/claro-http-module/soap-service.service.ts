// import { Injectable } from '@angular/core';
// import { Observable, Subscriber } from 'rxjs';
// // import { ISoapMethodResponse, Client, NgxSoapService } from 'ngx-soap';

// // import { SettingsService } from '~modules/infraestructure/settings';
// // import { ErrorManagementService } from '~modules/infraestructure/error-management';
// // import { EventManagerService } from '~modules/infraestructure/event-management';
// import { flatMap, map, catchError, tap } from 'rxjs/operators';

// /**
//  *
//  */
// // type SoapServiceFunction = (args: any, options: any, headers: any) => Observable<ISoapMethodResponse>;

// /**
//  *
//  */
// export interface SoapHeaders {
//   soapHeader?: any;
//   name?: string;
//   namespace?: string;
//   xmlns?: string;
// }

// /**
//  *
//  */
// export abstract class SoapClientParser {
//   private _alias: string;

//   private _createClient: (wsdl: string, endpoint: string) => Observable<Client>;
//   // private _client: Client;

//   private _wsdl: string;
//   private _endpoint: string;

//   /**
//    *
//    * @param alias
//    */
//   constructor(alias: string) {
//     this._alias = alias;
//   }

//   /**
//    *
//    */
//   get alias() {
//     return this._alias;
//   }

//   /**
//    *
//    */
//   get wsdl() {
//     return this._wsdl;
//   }

//   /**
//    *
//    */
//   get endpoint() {
//     return this._endpoint;
//   }

//   /**
//    *
//    */
//   get client() {
//     return this._client;
//   }

//   /**
//    *
//    * @param createClient
//    * @param wsdl
//    * @param endpoint
//    */
//   onStartService(createClient: (wsdl: string, endpoint: string) => Observable<Client>, wsdl: string, endpoint: string) {
//     this._createClient = createClient;
//     this._wsdl = wsdl;
//     this._endpoint = endpoint;
//   }

//   /**
//    *
//    */
//   createClient(): Observable<Client> {
//     return this._createClient(this.wsdl, this.endpoint).pipe(tap((client) => (this._client = client)));
//   }

//   /**
//    *
//    * @param response
//    * @param options
//    */
//   abstract parseResponse<R>(response: R, options: any): any;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SoapIntegrationService {
//   private useMocks: boolean = false;

//   constructor(
//     public soapClient: NgxSoapService,
//     public settings: SettingsService,
//     public eventManager: EventManagerService,
//     public errorManager: ErrorManagementService
//   ) {
//     this.createSOAPClient = this.createSOAPClient.bind(this);
//     this.useMocks = this.settings.getConfiguration('useMocks', false);
//   }

//   /**
//    *
//    * @param wsdl
//    * @param endpoint
//    */
//   createSOAPClient(wsdl: string, endpoint: string): Observable<Client> {
//     return new Observable((observer) => {
//       this.soapClient.createClient(wsdl, {}).then((client) => {
//         if ((<any>client.wsdl).services) {
//           client.setEndpoint(endpoint);
//           observer.next(client);
//           observer.complete();
//         }
//         client.wsdl.onReady((err) => {
//           if (err) {
//             observer.error(err);
//           } else {
//             client.setEndpoint(endpoint);
//             observer.next(client);
//           }
//         });
//       });
//     });
//   }

//   /**
//    *
//    * @param instance
//    */
//   private getClient(instance: SoapClientParser): Observable<Client> {
//     return new Observable((subscriber: Subscriber<Client>) => {
//       if (instance.client) {
//         subscriber.next(instance.client);
//         subscriber.complete();
//       } else {
//         instance.createClient().subscribe(
//           (newClient) => subscriber.next(newClient),
//           (err) => subscriber.error(err),
//           () => subscriber.complete()
//         );
//       }
//     });
//   }

//   /**
//    *
//    * @param instance
//    * @param operationName
//    * @param args
//    * @param headers
//    * @param options
//    * @param httpHeaders
//    */
//   fetchSOAPService<R, S>(
//     instance: SoapClientParser,
//     operationName: string,
//     args: any = {},
//     headers: SoapHeaders = {},
//     options: any = {},
//     httpHeaders: any = {}
//   ): Observable<S> {
//     const event = {
//       source: instance.alias,
//       type: 'request',
//       name: operationName,
//       timestamp: new Date().getTime(),
//     };

//     const notifyEnd = () => {
//       this.eventManager.notifyEvent({
//         ...event,
//         status: 'end',
//       });
//     };

//     this.eventManager.notifyEvent({
//       ...event,
//       status: 'start',
//     });

//     const useMocks = this.settings.getConfiguration(`${instance.alias}.useMocks`, false);
//     if (this.useMocks || useMocks) {
//       return instance[`${operationName}Mock`](args).pipe(
//         tap(notifyEnd, notifyEnd),
//         map((response: R) => instance.parseResponse<R>(response, options)),
//         catchError((err) => {
//           throw this.errorManager.registerError({
//             source: instance.alias,
//             event: operationName,
//             error: err,
//           });
//         })
//       );
//     }

//     return this.getClient(instance).pipe(
//       flatMap((client) => {
//         const serviceCall: SoapServiceFunction = <SoapServiceFunction>client[operationName];

//         if (!serviceCall) {
//           throw new Error('The service was not found in the WSDL.');
//         }

//         client.clearSoapHeaders();
//         client.addSoapHeader(headers.soapHeader || {}, headers.name, headers.namespace, headers.xmlns);
//         return serviceCall(args, options, {
//           ...httpHeaders,
//         });
//       }),
//       tap(notifyEnd, notifyEnd),
//       map((response: ISoapMethodResponse) => instance.parseResponse<R>(response.result, options)),
//       catchError((err) => {
//         throw this.errorManager.registerError({
//           source: instance.alias,
//           event: operationName,
//           error: err,
//         });
//       })
//     );
//   }
// }
