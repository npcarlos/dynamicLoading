import { EntityTemplate, EntityModel } from '~libraries/domain/base';

export interface HuellaImagenTemplate extends EntityTemplate {
  Cedula: string;
  Codigo: number;
  ImagenHuella: string;
  NumDedo: string;
  Nut: string;
  Resultado: string;
}

export class HuellaImagenModel extends EntityModel<HuellaImagenTemplate> implements HuellaImagenTemplate {
  Cedula: string;
  Codigo: number;
  ImagenHuella: string;
  NumDedo: string;
  Nut: string;
  Resultado: string;
}

export interface EjecucionNutTemplate extends EntityTemplate {
  Cedula: string;
  Codigo: number;
  Nut: string;
  Resultado: string;
}
export class EjecucionNutModel extends EntityModel<EjecucionNutTemplate> implements EjecucionNutTemplate {
  Cedula: string;
  Codigo: number;
  Nut: string;
  Resultado: string;
}

export interface MessageImagenValidarAutenticacionBiometricaTemplate {
  Code: number;
  Description: string;
  Title: string;
}

export interface CaptureFingerPrintImageResultTemplate {
  Error: boolean;
  Message: MessageImagenValidarAutenticacionBiometricaTemplate;
}

export interface ValidarImagenAutenticacionBiometricaTemplate extends EntityTemplate {
  CaptureFingerPrintImageResult: CaptureFingerPrintImageResultTemplate;
}

export class BiometriaImagenModel extends EntityModel<ValidarImagenAutenticacionBiometricaTemplate>
  implements ValidarImagenAutenticacionBiometricaTemplate {
  CaptureFingerPrintImageResult: CaptureFingerPrintImageResultTemplate;
}

export interface MessageValidarAutenticacionBiometricaTemplate {
  Code: string;
  Description: string;
  Title: string;
}

export interface CaptureAutenticacionBiometricaTemplate {
  Error: boolean;
  Message: MessageValidarAutenticacionBiometricaTemplate;
}

export interface ValidarAutenticacionBiometricaTemplate extends EntityTemplate {
  CaptureFingerPrintRNECResult: CaptureAutenticacionBiometricaTemplate;
}

export class BiometriaModel extends EntityModel<ValidarAutenticacionBiometricaTemplate>
  implements ValidarAutenticacionBiometricaTemplate {
  CaptureFingerPrintRNECResult: CaptureAutenticacionBiometricaTemplate;
}
