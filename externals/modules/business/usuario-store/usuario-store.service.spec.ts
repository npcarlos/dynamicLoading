import { TestBed } from '@angular/core/testing';

import { UsuarioStoreService } from './usuario-store.service';

describe('UsuarioStoreService', () => {
  let service: UsuarioStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
