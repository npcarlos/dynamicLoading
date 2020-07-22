import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DocumentoModel } from '~libraries/domain/common/documentos';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class DocumentosIntegrationService {
  constructor() {}

  fetchDocumentos() {
    const documentos = require('./documentos.json');
    return new Observable<DocumentoModel[]>((subscriber) => subscriber.next(documentos));
  }
}
