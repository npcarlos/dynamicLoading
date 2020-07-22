import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface ResponseInfoTemplate {
  ApplicationId: number;
  SolutionSetInstanceId: string;
  CurrentQueue: string;
}

export interface AuthenticationTokenTemplate {
  Status: string;
  Token: string;
}
export interface FieldTemplate {
  key: string;
  content: string;
}

export interface ContextDataTemplate {
  Field: FieldTemplate[];
}

export interface AuthenticationTemplate extends EntityTemplate {
  Status: string;
  ResponseInfo: ResponseInfoTemplate;
  Authentication: AuthenticationTokenTemplate;
  ContextData: ContextDataTemplate;
}

export class AuthenticationModel extends EntityModel<AuthenticationTemplate> implements AuthenticationTemplate {
  Status: string;
  ResponseInfo: ResponseInfoTemplate;
  Authentication: AuthenticationTokenTemplate;
  ContextData: ContextDataTemplate;

  buscarLineasMoviles() {
    const mobilePhoneList = this.ContextData.Field.find((item) => item.key === 'MobilePhoneList');
    return mobilePhoneList.content;
  }

  buscarLineasFijas() {
    const landLineList = this.ContextData.Field.find((item) => item.key === 'LandLineList');
    return landLineList.content;
  }

  codigoOtp() {
    const otpCode = this.ContextData.Field.find((item) => item.key === 'OTPCode');
    return otpCode.content;
  }
}

export interface AuthenticationResponseTemplate {
  DCResponse: AuthenticationTemplate;
}
