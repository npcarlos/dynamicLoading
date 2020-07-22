import { TestBed } from '@angular/core/testing';

import { CatalogoStoreService } from './catalogo-store.service';

describe('CatalogoStoreService', () => {
  let service: CatalogoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
