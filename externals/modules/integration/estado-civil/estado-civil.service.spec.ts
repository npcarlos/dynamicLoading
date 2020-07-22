import { TestBed } from '@angular/core/testing';

import { EstadoCivilIntegrationService } from './estado-civil.service';

describe('GenerosService', () => {
  let service: EstadoCivilIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoCivilIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
