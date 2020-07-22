import { TestBed } from '@angular/core/testing';

import { RestIntegrationService } from './rest-service.service';

describe('RestIntegrationService', () => {
  let service: RestIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
