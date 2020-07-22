import { TestBed } from '@angular/core/testing';

import { AutenticacionBiometricaStoreService } from './autenticacionBiometrica-store.service';

describe('ConveniosStoreService', () => {
  let service: AutenticacionBiometricaStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionBiometricaStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
