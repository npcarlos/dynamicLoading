import { TestBed } from '@angular/core/testing';

import { DireccionIntegrationService } from './direccion.service';

describe('DireccionIntegrationService', () => {
  let service: DireccionIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireccionIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
