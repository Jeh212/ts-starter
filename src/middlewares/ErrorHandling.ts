/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

const ERROR_MIDDLEWARE_HANDLER = (error: Error, _request: Request, response: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    response.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
    });
  }
  next();
};

export { ERROR_MIDDLEWARE_HANDLER };
