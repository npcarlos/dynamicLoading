import { TestBed } from '@angular/core/testing';

import { InventarioStoreService } from './inventario-store.service';

describe('InventarioStoreService', () => {
  let service: InventarioStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventarioStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
