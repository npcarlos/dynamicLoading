import { TestBed } from '@angular/core/testing';

import { InventarioIntegrationService } from './inventario.service';

describe('InventarioService', () => {
  let service: InventarioIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
