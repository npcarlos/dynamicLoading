import { Injectable, InjectionToken, Inject } from '@angular/core';

export const ENVIRONMENT_SETTINGS = new InjectionToken<any>('settings.environment');

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(@Inject(ENVIRONMENT_SETTINGS) private environmentSettings: any) {}

  getConfiguration(settingName: string, defaultValue: any = undefined): any {
    const requestedSetting = settingName.split('.').reduce((configurationObject, item) => {
      if (configurationObject) {
        return configurationObject[item];
      }
      return null;
    }, this.environmentSettings);
    return requestedSetting || defaultValue;
  }
}
