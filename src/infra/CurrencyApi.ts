/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';

type CurrencyData = {
  base: string;
  rates: object;
};

class CurrencyApi {
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async getLatestRate(): Promise<CurrencyData> {
    const options = {
      method: `GET`,
      url: this.baseUrl,
      params: { app_id: process.env.API_KEY },
      headers: { Accept: `application/json` },
    };
    const { data } = await axios.request<CurrencyData>(options);

    return data;
  }
}

const API = new CurrencyApi(`${process.env.API_URL}`);

export { API };
