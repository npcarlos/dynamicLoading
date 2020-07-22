import { TestBed } from '@angular/core/testing';

import { TipoNumeroStoreService } from './tipo-numero-store.service';

describe('TipoNumeroStoreService', () => {
  let service: TipoNumeroStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoNumeroStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
