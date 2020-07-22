import { TestBed } from '@angular/core/testing';
import { TiposCategoriasIntegrationService } from './tipos-categorias.service';

describe('TiposCategoriasIntegrationService', () => {
  let service: TiposCategoriasIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposCategoriasIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
