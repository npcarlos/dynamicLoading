import { TestBed } from '@angular/core/testing';

import { ShoppingCartIntegrationService } from './order-negotiator-shopping-cart-rest-client.service';

describe('ShoppingCartRestClientService', () => {
  let service: ShoppingCartIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
