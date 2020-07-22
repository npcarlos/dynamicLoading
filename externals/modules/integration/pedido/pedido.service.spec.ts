import { TestBed } from '@angular/core/testing';

import { PedidoIntegrationService } from './pedido.service';

describe('PedidoService', () => {
  let service: PedidoIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
