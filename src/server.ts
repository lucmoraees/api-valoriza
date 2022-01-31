import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import "./database";
import routes from './routes';
import AppError from './middlewares/AppError';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use(AppError);

app.listen(3333, () => console.log('👻 Servidor rodando na porta: 3333 👻'));
