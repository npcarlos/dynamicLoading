import { TestBed } from '@angular/core/testing';

import { RiesgoHCIntegrationService } from './riesgoHC.service';

describe('RiesgoHCService', () => {
  let service: RiesgoHCIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiesgoHCIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
