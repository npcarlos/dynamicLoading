import { TestBed } from '@angular/core/testing';

import { GenerosStoreService } from './generos-store.service';

describe('ConveniosStoreService', () => {
  let service: GenerosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
