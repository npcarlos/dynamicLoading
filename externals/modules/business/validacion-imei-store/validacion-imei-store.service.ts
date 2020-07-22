import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { notNullSelect } from '~libraries/resources/redux/selector';

import { ValidacionImeiModel } from '~libraries/domain/common/validacion-imei';
import * as ValidacionImeiReducer from '~libraries/reducers/common/validacion-imei/angular';
@Injectable({
  providedIn: 'root',
})
export class ValidacionImeiStoreService {
  constructor(private store: Store<ValidacionImeiReducer.ApplicationState>) {}

  // Funciones de selectores

  getValidacionImei(): Observable<ValidacionImeiModel[]> {
    return notNullSelect(ValidacionImeiReducer.selectValidacionImei)(this.store);
  }
  // Funciones de fetch (acciones asociadas a los effects)
  solicitarValidacionImei(seriales: string[]) {
    this.store.dispatch(ValidacionImeiReducer.fetchValidacionImei({ seriales }));
  }
}
