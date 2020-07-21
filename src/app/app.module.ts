import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { PlanesComponent }   from './planes/planes.component';
import { VistaCatalogosComponent }    from './vista-catalogos/vista-catalogos';
import { EquiposComponent } from './equipos/equipos.component';
import { CatalogoDirective }          from './catalogo.directive';
import { CatalogoService }            from './catalogo.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [CatalogoService],
  declarations: [ AppComponent,
                  VistaCatalogosComponent,
                  PlanesComponent,
                  EquiposComponent,
                  CatalogoDirective ],
  entryComponents: [ PlanesComponent, EquiposComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

