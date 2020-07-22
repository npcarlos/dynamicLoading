import { TestBed } from '@angular/core/testing';

import { DepartamentosStoreService } from './departamentos-store.service';

describe('DepartamentosStoreService', () => {
  let service: DepartamentosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartamentosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
