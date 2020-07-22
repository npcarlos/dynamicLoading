import { TestBed } from '@angular/core/testing';
import { GeneracionContratoIntegrationService } from './generacion-contrato.service';

describe('GeneracionContratoIntegrationService', () => {
  let service: GeneracionContratoIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneracionContratoIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
