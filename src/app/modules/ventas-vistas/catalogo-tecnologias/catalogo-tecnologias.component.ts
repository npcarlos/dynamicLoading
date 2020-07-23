import { Component, Input, OnInit }  from '@angular/core';

import { CatalogoTemplate } from '../../../catalogo.component';

@Component({
  templateUrl: './catalogo-tecnologias.component.html'
})
export class CatalogoTecnologiasComponent implements CatalogoTemplate, OnInit {
  @Input() parametrosCatalogo: any;
  constructor(){
  }
  ngOnInit()
  {
    
    console.log(this.parametrosCatalogo)
  }
  
}


