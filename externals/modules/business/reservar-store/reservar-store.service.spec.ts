import { TestBed } from '@angular/core/testing';
import { ReservarStoreService } from './reservar-store.service';

describe('ReservarStoreService', () => {
  let service: ReservarStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservarStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
