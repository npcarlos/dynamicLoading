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
  visualItemRenderTemplate: any;  
  constructor(public dummyService:CatalogoService ){
  }
  ngOnInit()
  {
    this.inicializarFuentesDeDatos();
    this.visualItemRenderTemplate = this.parametrosCatalogo.visualItemComponent 
  }

  inicializarFuentesDeDatos(){
    this.listaItems = this.dummyService.getAudio();
  }


  
}


