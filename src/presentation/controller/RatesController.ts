import 'reflect-metadata';

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ConversionRatesService } from '../../modules/ConversionRatesService';
import { CurrencyInformation } from '../../repository/protocols/IRepository';

type HandlerResponse = CurrencyInformation;

class RatesController {
  async handleConvertRate(request: Request, response: Response): Promise<Response<HandlerResponse>> {
    const { amountValue, fromRate, toRate } = request.body;
    const rateService = container.resolve(ConversionRatesService);
    const result = await rateService.convert({ amountValue, fromRate, toRate });

    return response.status(200).json(result);
  }
}
export { RatesController };
