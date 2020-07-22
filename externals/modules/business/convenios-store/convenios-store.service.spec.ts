import { TestBed } from '@angular/core/testing';

import { ConveniosStoreService } from './convenios-store.service';

describe('ConveniosStoreService', () => {
  let service: ConveniosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConveniosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
