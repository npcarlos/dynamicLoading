import { TestBed } from '@angular/core/testing';

import { CatalogoEquiposIntegrationService } from './catalogo-equipos.service';

describe('CatalogoService', () => {
  let serviceEquipo: CatalogoEquiposIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceEquipo = TestBed.inject(CatalogoEquiposIntegrationService);
  });

  it('should be created', () => {
    expect(serviceEquipo).toBeTruthy();
  });
});
