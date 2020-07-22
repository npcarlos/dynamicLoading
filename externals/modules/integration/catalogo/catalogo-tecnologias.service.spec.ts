import { TestBed } from '@angular/core/testing';

import { CatalogoTecnologiasIntegrationService } from './catalogo-tecnologias.service';

describe('CatalogoService', () => {
  let serviceTecnologia: CatalogoTecnologiasIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceTecnologia = TestBed.inject(CatalogoTecnologiasIntegrationService);
  });

  it('should be created', () => {
    expect(serviceTecnologia).toBeTruthy();
  });
});
