import { TestBed } from '@angular/core/testing';
import { SerialStoreService } from './serial-store.service';

describe('SerialStoreService', () => {
  let service: SerialStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerialStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
