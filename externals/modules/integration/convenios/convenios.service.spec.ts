import { TestBed } from '@angular/core/testing';

import { ConveniosIntegrationService } from './convenios.service';

describe('ConveniosIntegrationService', () => {
  let service: ConveniosIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConveniosIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
