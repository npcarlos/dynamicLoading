import { TestBed } from '@angular/core/testing';

import { UbicaReconocerStoreService } from './ubica-reconocer-store.service';

describe('UbicaReconocerStoreService', () => {
  let service: UbicaReconocerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicaReconocerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
