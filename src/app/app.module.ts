import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { PlanesComponent }   from './planes/planes.component';
import { VistaCatalogosComponent }    from './vista-catalogos/vista-catalogos';
import { EquiposComponent } from './equipos/equipos.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [AdService],
  declarations: [ AppComponent,
                  VistaCatalogosComponent,
                  PlanesComponent,
                  EquiposComponent,
                  AdDirective ],
  entryComponents: [ PlanesComponent, EquiposComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

