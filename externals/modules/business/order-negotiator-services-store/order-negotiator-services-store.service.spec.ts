import { TestBed } from '@angular/core/testing';
import { OrderNegotiatorStoreService } from './order-negotiator-services-store.service';

describe('orderNegotiatorService', () => {
  let service: OrderNegotiatorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderNegotiatorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
