import { TestBed } from '@angular/core/testing';
import { TiposCategoriasStoreService } from './tipos-categorias-store.service';

describe('TipoPlanStoreService', () => {
  let service: TiposCategoriasStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposCategoriasStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
