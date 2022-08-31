/* eslint-disable no-var */
/* eslint-disable guard-for-in */
import { inject, injectable } from 'tsyringe';
import { TokenRegister } from '../container';
import { CurrencyInformation, IRepository } from '../repository/protocols/IRepository';
import { sendEmail } from '../utils/fakeEmail';

@injectable()
class ConversionRatesService {
  constructor(
    @inject(TokenRegister.CURRENCY_REPOSITORY)
    private readonly currencyRepo: IRepository
  ) {}

  async convert({ amountValue, fromRate, toRate }: CurrencyInformation): Promise<any> {
    const { base, rates } = await this.currencyRepo.lastestRatesValues();
    const fromValue: any = [];
    const toValue: any = [];

    const defaultRate = fromRate === undefined ? base : fromRate;

    const rateInArray = Object.entries(rates);

    rateInArray.forEach(([key, value]) => {
      if (key === defaultRate) {
        fromValue.push(key, value);
      }
      if (key === toRate) {
        toValue.push(key, value);
      }
    });

    const fromRateValue = fromValue[1];
    const toRateValue = toValue[1];

    const exchangeRate = fromRateValue * toRateValue;

    const currencyExchange = amountValue / Math.round(fromRateValue);

    const currencyExchangeResult = {
      from: {
        currency: defaultRate,
        rateValue: fromRateValue,
      },
      to: {
        currency: toRate,
        rateValue: toRateValue,
      },
      exchangeRate: exchangeRate.toFixed(2),
      currencyExchange: Number(currencyExchange.toFixed(2)),
    };

    sendEmail(currencyExchangeResult);
    return currencyExchangeResult;
  }
}

export { ConversionRatesService };
