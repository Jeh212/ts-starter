import { Joi } from 'celebrate';

const CURRENCY_SCHEMA = Joi.object().keys({
  amountValue: Joi.number().required(),
  fromRate: Joi.string(),
  toRate: Joi.string().required(),
});
export { CURRENCY_SCHEMA };
