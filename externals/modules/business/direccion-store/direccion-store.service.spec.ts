import { TestBed } from '@angular/core/testing';

import { DireccionStoreService } from './direccion-store.service';

describe('DireccionStoreService', () => {
  let service: DireccionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireccionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
