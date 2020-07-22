import { TestBed } from '@angular/core/testing';
import { SearchStorageMediumIntegrationService } from './search-storage-medium.service';

describe('SearchStorageMediumService', () => {
  let service: SearchStorageMediumIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchStorageMediumIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
