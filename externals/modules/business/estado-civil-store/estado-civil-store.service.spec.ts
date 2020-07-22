import { TestBed } from '@angular/core/testing';

import { EstadoCivilStoreService } from './estado-civil-store.service';

describe('EstadoCivilStoreService', () => {
  let service: EstadoCivilStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoCivilStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
