import { TestBed } from '@angular/core/testing';

import { ContextAttributesRestClientService } from './atributos-contexto-cliente.service';

describe('ContextAttributesRestClientService', () => {
  let service: ContextAttributesRestClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextAttributesRestClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
