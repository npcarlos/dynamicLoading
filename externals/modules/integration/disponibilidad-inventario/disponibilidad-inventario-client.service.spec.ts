import { TestBed } from '@angular/core/testing';

import { DisponibilidadInventarioRestClientService } from './disponibilidad-inventario-rest-client.service';

describe('DisponibilidadInventarioRestService', () => {
  let service: DisponibilidadInventarioRestClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibilidadInventarioRestClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
