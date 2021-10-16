import http from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import routes from './routes';

const app: Express = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept,Authorization');

  next();
});

app.use('/', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('not found');

  return res.status(404).json({
    ...error,
  })
});

const httpServer = http.createServer(app);

const PORT: any = process.env.PORT ?? 5000;

httpServer.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
