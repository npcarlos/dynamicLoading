import { NgModule, ModuleWithProviders } from '@angular/core';
import { ErrorManagementService } from './error-management-service.service';

@NgModule({
  declarations: [],
  imports: [],
})
export class ErrorManagementModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorManagementModule,
      providers: [ErrorManagementService],
    };
  }
}
