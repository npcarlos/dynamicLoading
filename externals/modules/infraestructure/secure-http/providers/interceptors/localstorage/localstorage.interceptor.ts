import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LocalStorageInterceptorOptions {
  tokenName?: string;
  headerName?: string;
  headerValue?: (token: string) => string;
}

export const LOCAL_STORAGE_TOKEN_OPTIONS = new InjectionToken<LocalStorageInterceptorOptions>(null);

@Injectable()
export class LocalStorageInterceptor implements HttpInterceptor {
  private tokenName: string = 'user_token';
  private headerValue = (token: string) => `Bearer ${token}`;
  private headerName = 'Authorization';

  constructor(@Inject(LOCAL_STORAGE_TOKEN_OPTIONS) options: LocalStorageInterceptorOptions = {}) {
    if (options.tokenName) {
      this.tokenName = options.tokenName;
    }
    if (options.headerValue) {
      this.headerValue = options.headerValue;
    }
    if (options.headerName) {
      this.headerName = options.headerName;
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(this.tokenName);
    if (token) {
      request.headers.set(this.headerName, this.headerValue(token));
    }
    return next.handle(request);
  }
}

export function generateInterceptor(options: LocalStorageInterceptorOptions) {
  return {
    providers: [
      {
        provide: LOCAL_STORAGE_TOKEN_OPTIONS,
        useValue: options
      }
    ],
    interceptorClass: LocalStorageInterceptor
  };
}
