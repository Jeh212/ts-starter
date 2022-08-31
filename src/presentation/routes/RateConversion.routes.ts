/* eslint-disable prettier/prettier */
import { Request, Response, Router } from 'express';
import { RatesController } from '../controller/RatesController';
import { celebrate, Segments } from 'celebrate';
import { CURRENCY_SCHEMA } from '../schema';

const ratesRouter = Router();

const ratesController = new RatesController();

ratesRouter.get(`/convert`, celebrate({ [Segments.BODY]: CURRENCY_SCHEMA }), (request: Request, response: Response) =>
  ratesController.handleConvertRate(request, response)
);

export { ratesRouter };
