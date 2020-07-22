import { TestBed } from '@angular/core/testing';

import { DisponibilidadInventarioStoreService } from './disponibilidad-inventario-store.service';

describe('DisponibilidadInventarioStoreService', () => {
  let service: DisponibilidadInventarioStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilidadInventarioStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
