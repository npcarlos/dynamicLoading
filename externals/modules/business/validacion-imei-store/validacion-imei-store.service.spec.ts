import { TestBed } from '@angular/core/testing';

import { ValidacionImeiStoreService } from './validacion-imei-store.service';

describe('ValidacionImeiStoreService', () => {
  let service: ValidacionImeiStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionImeiStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
