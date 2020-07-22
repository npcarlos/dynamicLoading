import { TestBed } from '@angular/core/testing';
import { StorageMediumStoreService } from './storage-medium-store.service';

describe('StorageMediumStoreService', () => {
  let service: StorageMediumStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageMediumStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
