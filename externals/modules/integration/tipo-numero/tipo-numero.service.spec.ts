import { TestBed } from '@angular/core/testing';

import { TipoNumeroIntegrationService } from './tipo-numero.service';

describe('TipoNumeroService', () => {
  let service: TipoNumeroIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoNumeroIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
