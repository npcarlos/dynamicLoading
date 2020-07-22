import { TestBed } from '@angular/core/testing';
import { ReservarIntegrationService } from './reservar.service';

describe('ReservarService', () => {
  let service: ReservarIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservarIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
