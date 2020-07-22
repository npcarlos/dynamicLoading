import { TestBed } from '@angular/core/testing';

import { CiudadesIntegrationService } from './ciudades.service';

describe('CiudadesService', () => {
  let service: CiudadesIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
