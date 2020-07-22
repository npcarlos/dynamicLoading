import { TestBed } from '@angular/core/testing';

import { UsuarioIntegrationService } from './usuario.service';

describe('UsuarioIntegrationService', () => {
  let service: UsuarioIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
