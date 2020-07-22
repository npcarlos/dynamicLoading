import { Injectable } from '@angular/core';
import { RestServiceTemplate } from '~libraries/infraestructure/http-services/rest-service';
import { RestIntegrationService } from '~modules/infraestructure/claro-http-module';
import {
  AuthenticationTemplate,
  AuthenticationModel,
  AuthenticationResponseTemplate,
} from '~libraries/domain/common/authenticationIdVision';

import { Observable } from 'rxjs';

declare var require;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationAnswerData extends RestServiceTemplate<AuthenticationTemplate, AuthenticationModel> {
  constructor(protected restIntegrationService: RestIntegrationService) {
    super(restIntegrationService, 'services.integration.common.checkByOTP');
  }

  authenticationAnswerData(authentication: AuthenticationModel): Observable<AuthenticationModel> {
    return this.restIntegrationService.put<AuthenticationTemplate, AuthenticationModel>(
      this,
      'authenticationAnswerData',
      {
        applicationId: authentication.ResponseInfo.ApplicationId,
        Question: [
          {
            Id: '',
            QuestionId: '',
            Text: '',
            Type: '',
            IsDummy: '',
            isQuestionTextHasListTypeDataElement: '',
            ListAnswerIndex: '',
            ExpirationTime: '',
            TimeTakenToAnswer: '',
            Answer: [
              {
                IsSelected: '',
                CorrectAnswer: '',
                value: '',
              },
            ],
          },
        ],
      }
    );
  }

  public parseResponse(response: AuthenticationTemplate): AuthenticationModel {
    throw new Error('Method not implemented.');
  }
}
