import { TestBed } from '@angular/core/testing';

import { DepartamentosIntegrationService } from './departamentos.service';

describe('DepartamentosService', () => {
  let service: DepartamentosIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentosIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
