import { NgModule, ModuleWithProviders, Provider, InjectionToken } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

declare var require: any;

interface InterceptorDefinition {
  name: string;
  options?: any;
}

export const INTERCEPTOR_DEFINITION = new InjectionToken<InterceptorDefinition[]>('interceptor_definitions');
export function initInterceptorProviders(interceptorDefinitions: InterceptorDefinition[]) {
  const providers: Provider[] = [];
  const httpInterceptors: HttpInterceptor[] = [];

  interceptorDefinitions.forEach((definition: InterceptorDefinition) => {
    const interceptorDefinition = require(`./providers/interceptors/${definition.name}`);
    const interceptorData = interceptorDefinition.generateInterceptor(definition.options);
    providers.push(interceptorData.providers);
    httpInterceptors.push(interceptorData.interceptorClass);
  });

  return providers.concat(
    httpInterceptors.map((interceptor) => ({
      provide: HTTP_INTERCEPTORS,
      useClass: interceptor,
      multi: true,
    }))
  );
}

@NgModule({
  imports: [HttpClientModule],
})
export class SecureHttpModule {
  static forRoot(interceptorDefinitions: InterceptorDefinition[] = []): ModuleWithProviders {
    return {
      ngModule: SecureHttpModule,
      providers: [
        {
          provide: INTERCEPTOR_DEFINITION,
          useValue: interceptorDefinitions,
        },
        ...initInterceptorProviders(interceptorDefinitions),
      ],
    };
  }
}
