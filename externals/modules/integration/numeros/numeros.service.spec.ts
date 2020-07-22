import { TestBed } from '@angular/core/testing';
import { NumerosIntegrationService } from './numeros.service';

describe('NumerosService', () => {
  let service: NumerosIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerosIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
