import { TestBed } from '@angular/core/testing';

import { DocumentosIntegrationService } from './documentos.service';

describe('DocumentosIntegrationService', () => {
  let service: DocumentosIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentosIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
