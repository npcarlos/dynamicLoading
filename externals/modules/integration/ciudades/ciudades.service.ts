import { Injectable } from '@angular/core';
import { NgxSoapService, ISoapMethodResponse } from 'ngx-soap';
import { Observable } from 'rxjs';
import { CiudadesModel, Municipios, CiudadesTemplate } from '~libraries/domain/common/ciudades';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class CiudadesIntegrationService {
  constructor() {}

  fetchCiudades(codigoDaneDepartamento: string) {
    const departamentos = require('./ciudades.json');
    const departamento = departamentos.find(
      (departamento: CiudadesModel) => departamento.codigoDane === codigoDaneDepartamento
    );
    const { municipios }: { municipios: Municipios[] } = departamento;
    return new Observable<Municipios[]>((subscriber) => subscriber.next(municipios));
  }
}
