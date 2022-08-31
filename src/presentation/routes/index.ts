import { Router } from 'express';
import { ratesRouter } from './RateConversion.routes';

const router = Router();

router.use(`/rates`, ratesRouter);

export { router };
