import { TestBed } from '@angular/core/testing';

import { SoapIntegrationService } from './soap-service.service';

describe('SoapIntegrationService', () => {
  let service: SoapIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoapIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
