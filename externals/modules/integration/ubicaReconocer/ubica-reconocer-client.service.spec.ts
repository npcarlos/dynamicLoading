import { TestBed } from '@angular/core/testing';

import { UbicaReconocerRestClientService } from './ubica-reconocer-rest-client.service';

describe('UbicaReconocerService', () => {
  let service: UbicaReconocerRestClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicaReconocerRestClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
