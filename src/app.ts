import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import router from './app/routes';
import { notFoundHandler } from './app/middleware/notFoundHandler';
import { globalErrorHandler } from './app/middleware/globalErrorHander';
const app: Application = express()

// json parser
app.use(express.json());
// cookie parser
app.use(cookieParser())
// cors middleware
app.use(cors());

// application routes
app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Sports Shop Service is on air!')
})

// not found route handler
app.all('*', notFoundHandler);

app.use(globalErrorHandler);

export default app;