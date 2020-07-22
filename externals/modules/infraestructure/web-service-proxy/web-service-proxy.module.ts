import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebServiceProxyInterceptor } from './web-service-proxy.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WebServiceProxyInterceptor,
      multi: true,
    },
  ],
})
export class WebServiceProxyModule {}
