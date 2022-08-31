/* eslint-disable @typescript-eslint/ban-types */
interface CurrencyInformation {
  amountValue: number;
  fromRate: string;
  toRate: string;
}
export type RepoResponse = {
  base: string;
  rates: object;
};
interface IRepository {
  lastestRatesValues(): Promise<RepoResponse>;
}

export { IRepository, CurrencyInformation };
