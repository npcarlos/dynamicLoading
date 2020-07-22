import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';

import { forkJoin } from 'rxjs';
import { mergeMap, map, flatMap } from 'rxjs/operators';

import {
  CatalogoEquiposIntegrationService,
  CatalogoPlanesIntegrationService,
  CatalogoTecnologiasIntegrationService,
} from '~modules/integration/catalogo';
import { EquipoModel, TecnologiaModel, PlanModel, CatalogoModel } from '~libraries/domain/fullstack/catalogo';

import * as CatalogoActions from './catalogo.actions';

@Injectable()
export class CatalogoEffects {
  loadCatalogoEquipos = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogoActions.fetchCatalogoEquipos),
      mergeMap((action) =>
        this.catalogoEquiposIntegrationService
          .fetchCatalogoEquipos(action.atributosContextoCliente)
          .pipe(map((equipos: EquipoModel[]) => CatalogoActions.actualizarCatalogoEquipos({ equipos })))
      )
    )
  );

  loadCatalogoPlanes = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogoActions.fetchCatalogoPlanes),
      mergeMap((action) =>
        this.catalogoPlanesIntegrationService
          .fetchCatalogoPlanes(action.atributosContextoCliente)
          .pipe(map((planes: PlanModel[]) => CatalogoActions.actualizarCatalogoPlanes({ planes })))
      )
    )
  );

  loadCatalogoTecnologias = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogoActions.fetchCatalogoTecnologias),
      mergeMap((action) =>
        this.catalogoTecnologiasIntegrationService
          .fetchCatalogoTecnologias(action.atributosContextoCliente)
          .pipe(map((tecnologias: TecnologiaModel[]) => CatalogoActions.actualizarCatalogoTecnologia({ tecnologias })))
      )
    )
  );

  loadPlanSeleccionado = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogoActions.fetchPlanSeleccionado),
      mergeMap((action) =>
        this.catalogoPlanesIntegrationService.fetchCatalogoItemPorId(action.categoriaValor).pipe(
          flatMap((plan: PlanModel) => {
            return this.cargarCatalogoItem(plan);
          }),
          map((plan: PlanModel) => CatalogoActions.seleccionarPlanCatalogo({ plan }))
        )
      )
    )
  );

  loadEquipoSeleccionado = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogoActions.fetchEquipoSeleccionado),
      mergeMap((action) =>
        this.catalogoEquiposIntegrationService.fetchCatalogoItemPorId(action.categoriaValor).pipe(
          flatMap((equipo: EquipoModel) => {
            return this.cargarCatalogoItem(equipo);
          }),
          map((equipo: EquipoModel) => CatalogoActions.seleccionarEquipoCatalogo({ equipo }))
        )
      )
    )
  );

  loadTecnologiaSeleccionada = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogoActions.fetchTecnologiaSeleccionada),
      mergeMap((action) =>
        this.catalogoTecnologiasIntegrationService.fetchCatalogoItemPorId(action.categoriaValor).pipe(
          flatMap((tecnologia: TecnologiaModel) => {
            return this.cargarCatalogoItem(tecnologia);
          }),
          map((tecnologia: TecnologiaModel) => CatalogoActions.seleccionarTecnologiaCatalogo({ tecnologia }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private catalogoEquiposIntegrationService: CatalogoEquiposIntegrationService,
    private catalogoPlanesIntegrationService: CatalogoPlanesIntegrationService,
    private catalogoTecnologiasIntegrationService: CatalogoTecnologiasIntegrationService
  ) {}

  cargarCatalogoItem(itemCatalogo: CatalogoModel) {
    return forkJoin(
      itemCatalogo.specificationAssociations
        .filter((word) => word.associationType == 'incorporates')
        .map((asociacion: { targetSpecificationId: string }) =>
          this.catalogoPlanesIntegrationService.fetchCatalogoItemPorId(asociacion.targetSpecificationId)
        )
    ).pipe(
      map((asociaciones) => {
        itemCatalogo.asociaciones = asociaciones;
        return itemCatalogo;
      })
    );
  }
}
