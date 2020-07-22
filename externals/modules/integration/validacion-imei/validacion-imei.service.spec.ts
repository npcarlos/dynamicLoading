import { TestBed } from '@angular/core/testing';

import { ValidacionImeiIntegrationService } from './validacion-imei.service';

describe('ValidacionImeiService', () => {
  let service: ValidacionImeiIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionImeiIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
