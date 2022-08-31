/* eslint-disable @typescript-eslint/ban-types */
import 'reflect-metadata';
import { API } from '../infra/CurrencyApi';
import { IRepository, RepoResponse } from './protocols/IRepository';
import { ApiError, HttpCode } from '../utils/ApiError';

class Repository implements IRepository {
  async lastestRatesValues(): Promise<RepoResponse> {
    try {
      const { base, rates } = await API.getLatestRate();
      return { base, rates };
    } catch (error) {
      throw new ApiError(`Internal Server Error`, HttpCode.INTERNAL_SERVER_ERROR);
    }
  }
}
export { Repository };
