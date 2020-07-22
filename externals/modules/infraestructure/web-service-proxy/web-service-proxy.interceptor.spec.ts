import { TestBed } from '@angular/core/testing';

import { WebServiceProxyInterceptor } from './web-service-proxy.interceptor';

describe('WebServiceProxyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WebServiceProxyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WebServiceProxyInterceptor = TestBed.inject(WebServiceProxyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
