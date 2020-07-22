import { TestBed } from '@angular/core/testing';

import { DocumentosStoreService } from './documentos-store.service';

describe('DocumentosStoreService', () => {
  let service: DocumentosStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentosStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
