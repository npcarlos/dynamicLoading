import { EntityTemplate, EntityModel } from '~libraries/domain/base';
import { SoapIntegrationService, SoapClientParser, SoapHeaders } from '~modules/infraestructure/claro-http-module';

export abstract class SoapService<T extends EntityTemplate, M extends EntityModel<T>> extends SoapClientParser {
  constructor(protected soapIntegrationService: SoapIntegrationService, alias: string) {
    super(alias);
    const wsdl = soapIntegrationService.settings.getConfiguration(`${alias}.wsdl`);
    const endpoint = soapIntegrationService.settings.getConfiguration(`${alias}.endpoint`);

    this.onStartService(soapIntegrationService.createSOAPClient, wsdl, endpoint);
    this.createClient();
  }

  fetchService<S>(
    serviceName: string,
    args: any = {},
    headers: SoapHeaders = {},
    options: any = {},
    httpHeaders: any = {}
  ) {
    return this.soapIntegrationService.fetchSOAPService<T, S>(this, serviceName, args, headers, options, httpHeaders);
  }

  /**
   *
   * @param response
   * @param options
   */
  abstract parseResponse(response: any, options: any): M | M[];
}
