import { TestBed } from '@angular/core/testing';

import { CiudadesStoreService } from './ciudades-store.service';

describe('CiudadesStoreService', () => {
  let service: CiudadesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
