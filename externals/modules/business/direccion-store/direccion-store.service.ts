import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { formatDate } from '@angular/common';

import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { notNullSelect } from '~libraries/resources/redux/selector';

import { ClienteModel } from '~libraries/domain/common/cliente';
import { DireccionModel } from '~libraries/domain/common/direccion';
import { SettingsService } from '~modules/infraestructure/settings/settings.service';
import * as DireccionReducer from '~libraries/reducers/common/direccion/angular';

// TODO Revisar estructura
@Injectable({
  providedIn: 'root',
})
export class DireccionStoreService {
  nuevaDireccionPopUp: any;
  cliente: ClienteModel;
  constructor(private store: Store<DireccionReducer.ApplicationState>, protected settings: SettingsService) {}

  // Funciones de selectores
  getDirecciones(): Observable<DireccionModel[]> {
    return notNullSelect(DireccionReducer.selectDirecciones)(this.store);
  }

  // Funciones de fetch (acciones asociadas a los effects)
  obtenerDireccion(token: string) {
    this.store.dispatch(DireccionReducer.fetchObtenerDireccionPorToken({ token }));
  }

  obtenerDireccionPorId(id: string) {
    this.store.dispatch(DireccionReducer.fetchObtenerDireccionPorId({ id }));
  }

  agregarDireccion(onWindowClosed: (token: string) => void) {
    if (this.nuevaDireccionPopUp) {
      this.nuevaDireccionPopUp.focus();
    }

    const today = new Date();
    let tsToday = '';

    tsToday = formatDate(today, 'yyyy/MM/dd', 'en-Es', 'GTM');
    const encryptConsulta = CryptoJS.TripleDES.encrypt(
      CryptoJS.enc.Utf8.parse(
        this.settings.getConfiguration('services.integration.common.direccion.web.user') + '|' + tsToday
      ),
      CryptoJS.MD5(
        CryptoJS.enc.Utf8.parse(this.settings.getConfiguration('services.integration.common.direccion.web.key'))
      ),
      {
        mode: CryptoJS.mode.ECB,
      }
    ).toString();

    let opcionesRandom = new Date().getTime().toString();
    let randomToken: string = 'APV' + opcionesRandom.substring(0, 15);

    const url = this.settings.getConfiguration('services.integration.common.direccion.web.url');

    const nuevaDireccionTarget = 'nuevaDireccionPopUp';
    this.nuevaDireccionPopUp = window.open(
      '',
      nuevaDireccionTarget,
      'toolbar=no,location=no,scrollbars=yes,resizable=yes,top=500,left=500,width=720,height=400'
    );

    const nuevaDireccionForm = document.createElement('form');
    nuevaDireccionForm.action = url;
    nuevaDireccionForm.method = 'POST';
    nuevaDireccionForm.target = nuevaDireccionTarget;

    const consultaInput = document.createElement('input');
    consultaInput.name = 'consulta';
    consultaInput.value = encryptConsulta;
    nuevaDireccionForm.appendChild(consultaInput);

    const tokenInput = document.createElement('input');
    tokenInput.name = 'token';
    tokenInput.value = randomToken;
    nuevaDireccionForm.appendChild(tokenInput);

    document.body.appendChild(nuevaDireccionForm);
    nuevaDireccionForm.submit();
    document.body.removeChild(nuevaDireccionForm);

    var timer = setInterval(() => {
      if (this.nuevaDireccionPopUp.closed) {
        clearInterval(timer);
        onWindowClosed(randomToken);
        this.nuevaDireccionPopUp = null;
      }
    }, 1000);
  }
}
