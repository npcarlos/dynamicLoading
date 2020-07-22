import { TestBed } from '@angular/core/testing';

import { GrafologoIntegrationService } from './grafologo.service';

describe('ClienteService', () => {
  let service: GrafologoIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrafologoIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
