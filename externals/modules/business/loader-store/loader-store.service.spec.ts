import { TestBed } from '@angular/core/testing';

import { LoaderStoreService } from './loader-store.service';

describe('LoaderStoreService', () => {
  let service: LoaderStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
