import { Component, Input, OnInit }  from '@angular/core';

import { VisualCatalogoTemplate } from '../../../catalogo.component';
import { CatalogoService } from '~modules/business/dummy/catalogo.service';

@Component({
  templateUrl: './catalogo-audio.component.html'
})
export class CatalogoAudioComponent implements VisualCatalogoTemplate, OnInit {
  @Input() parametrosCatalogo: any;
  @Input() promocionesIVA: any;
  listaItems: any[];
  visualItemRender: any;
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit()
  {
    this.listaItems = this.dummyService.getAudio();
    this.visualItemRender = this.parametrosCatalogo.visualItemComponent 

  //   name: 'Tecnologías',
  //     visualCatalogComponent: CatalogoTecnologiasComponent,
  //     visualItemComponent: ItemTecnologiaComponent,
  //     filtros: [],
  //     informacionOpcional
  }
  
}


