import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { DocumentoModel } from '~libraries/domain/common/documentos';
import { DocumentosIntegrationService } from '~modules/integration/documentos';

import * as DocumentosActions from './documentos.actions';

@Injectable()
export class DocumentosEffects {
  loadDocumentos = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentosActions.fetchDocumentos),
      mergeMap((action) =>
        this.documentosIntegrationService
          .fetchDocumentos()
          .pipe(map((documentos: DocumentoModel[]) => DocumentosActions.actualizarDocumentos({ documentos })))
      )
    )
  );

  constructor(private actions$: Actions, private documentosIntegrationService: DocumentosIntegrationService) {}
}
