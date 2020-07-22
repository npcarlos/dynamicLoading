import { TestBed } from '@angular/core/testing';

import { CatalogoPlanesIntegrationService } from './catalogo-planes.service';

describe('CatalogoService', () => {
  let servicePlan: CatalogoPlanesIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicePlan = TestBed.inject(CatalogoPlanesIntegrationService);
  });

  it('should be created', () => {
    expect(servicePlan).toBeTruthy();
  });
});
