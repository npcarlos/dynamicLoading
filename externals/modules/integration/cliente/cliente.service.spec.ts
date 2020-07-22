import { TestBed } from '@angular/core/testing';

import { ClienteIntegrationService } from './cliente.service';

describe('ClienteService', () => {
  let service: ClienteIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
