import { TestBed } from '@angular/core/testing';

import { AutenticacionBiometricaIntegrationService } from './autenticacionBiometrica.service';

describe('AutenticacionBiometricanService', () => {
  let service: AutenticacionBiometricaIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionBiometricaIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
