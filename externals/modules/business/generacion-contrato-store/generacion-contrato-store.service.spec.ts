import { TestBed } from '@angular/core/testing';

import { GeneracionContratoStoreService } from './generacion-contrato-store.service';

describe('GeneracionContratoStoreService', () => {
  let service: GeneracionContratoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneracionContratoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
