import { TestBed } from '@angular/core/testing';

import { OrderItemIntegrationService } from './order-negotiator-order-item-rest-client.service';

describe('ProductOfferIntegrationService', () => {
  let service: OrderItemIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderItemIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
