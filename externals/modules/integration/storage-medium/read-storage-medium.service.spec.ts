import { TestBed } from '@angular/core/testing';
import { ReadStorageMediumIntegrationService } from './read-storage-medium.service';

describe('ReadStorageMediumService', () => {
  let service: ReadStorageMediumIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadStorageMediumIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
