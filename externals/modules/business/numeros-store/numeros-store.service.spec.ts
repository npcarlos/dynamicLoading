import { TestBed } from '@angular/core/testing';
import { NumerosStoreService } from './numeros-store.service';

describe('NumerosStoreService', () => {
  let service: NumerosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
