import { TestBed } from '@angular/core/testing';

import { RiesgoListasIntegrationService } from './riesgoListas.service';

describe('RiesgoListasService', () => {
  let service: RiesgoListasIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiesgoListasIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
