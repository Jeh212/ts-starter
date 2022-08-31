import 'reflect-metadata';
import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { router } from './presentation/routes';
import { ERROR_MIDDLEWARE_HANDLER } from './middlewares/ErrorHandling';
import { errors } from 'celebrate';

const app = express();
app.use(express.json());
app.use(router);

app.use(errors());
app.use(ERROR_MIDDLEWARE_HANDLER);

const LOCAL_PORT = process.env.LOCAL_PORT;
const DOCKER_PORT = process.env.DOCKER_PORT;

app.listen(LOCAL_PORT, () => console.log(`Server Running! LOCAL_PORT: ${LOCAL_PORT} || DOCKER_PORT: ${DOCKER_PORT}`));

export { app };
