import { NgModule, ModuleWithProviders } from '@angular/core';
import { NavigationService } from './navigation.service';
import { SettingsModule, SettingsService } from '~modules/infraestructure/settings';

@NgModule({
  declarations: [],
  imports: [SettingsModule],
})
export class NavigationModule {
  static forRoot(): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
      providers: [
        {
          provide: NavigationService,
          deps: [SettingsService],
        },
      ],
    };
  }
}
