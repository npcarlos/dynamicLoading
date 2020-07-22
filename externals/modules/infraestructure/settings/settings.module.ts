import { NgModule, ModuleWithProviders } from '@angular/core';
import { ENVIRONMENT_SETTINGS, SettingsService } from './settings.service';

@NgModule({
  declarations: [],
  imports: [],
})
export class SettingsModule {
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: SettingsModule,
      providers: [
        {
          provide: ENVIRONMENT_SETTINGS,
          useValue: environment,
        },
        SettingsService,
      ],
    };
  }
}
