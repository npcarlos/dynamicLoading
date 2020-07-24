import { Component, Input, OnInit }  from '@angular/core';

import { CatalogoService } from '~modules/business/dummy/catalogo.service';
import { CatalogoRenderTemplate } from '../../visual-components/catalogo-generico/catalogo.component';

@Component({
  templateUrl: './catalogo-audio-render.component.html'
})
export class CatalogoAudioRenderComponent implements CatalogoRenderTemplate, OnInit {
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


