import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { PlanesComponent }   from './modules/ventas-vistas/catalogo-planes/vista-catalogo-planes/planes.component';
import { VistaCatalogosBannerComponent }    from './vista-catalogos/vista-catalogos-banner.component';
import { EquiposComponent } from './modules/ventas-vistas/catalogo-equipos/vista-catalogo-equipos/equipos.component';
import { CatalogoDirective }          from './catalogo.directive';
import { CatalogoService }            from './catalogo.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [CatalogoService],
  declarations: [ AppComponent,
                  VistaCatalogosBannerComponent,
                  PlanesComponent,
                  EquiposComponent,
                  CatalogoDirective ],
  entryComponents: [ PlanesComponent, EquiposComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

