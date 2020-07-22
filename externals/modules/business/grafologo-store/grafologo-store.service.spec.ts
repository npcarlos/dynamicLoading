import { TestBed } from '@angular/core/testing';

import { GrafologoStoreService } from './grafologo-store.service';

describe('GrafologoStoreService', () => {
  let service: GrafologoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrafologoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
