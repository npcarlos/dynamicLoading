import { TestBed } from '@angular/core/testing';

import { AtributosContextoClienteStoreService } from './atributos-contexto-cliente-store.service';

describe('AtributosContextoClienteStoreService', () => {
  let service: AtributosContextoClienteStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributosContextoClienteStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
