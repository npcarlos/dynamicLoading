import { NgModule, ModuleWithProviders } from '@angular/core';
import { EventManagerService } from './event-manager.service';

@NgModule({
  declarations: [],
  imports: [],
})
export class EventManagementModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EventManagementModule,
      providers: [EventManagerService],
    };
  }
}
