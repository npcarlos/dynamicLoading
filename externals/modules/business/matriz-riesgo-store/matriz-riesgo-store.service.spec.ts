import { TestBed } from '@angular/core/testing';

import { MatrizRiesgoStoreService } from './matriz-riesgo-store.service';

describe('MatrizRiesgoStoreService', () => {
  let service: MatrizRiesgoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrizRiesgoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
