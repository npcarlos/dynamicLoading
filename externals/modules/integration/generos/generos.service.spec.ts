import { TestBed } from '@angular/core/testing';

import { GenerosIntegrationService } from './generos.service';

describe('GenerosIntegrationService', () => {
  let service: GenerosIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerosIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
