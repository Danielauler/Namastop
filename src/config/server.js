import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';

import { log } from './utils';
import routes from './routes';

const app = express();
const PORT = 3000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://namastop:Namastop123@namastop-lyi6r.mongodb.net/projNovatics');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
routes(app);

// 404
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    message: 'The requested resource was not found',
  });
});

// 5xx
app.use((err, req, res) => {
  log.error(err.stack);
  const message = process.env.NODE_ENV === 'production'
    ? 'Something went wrong, we\'re looking into it...'
    : err.stack;
  res.status(500).send({
    status: 500,
    message,
  });
});

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`you are server is running on ${PORT}`);
});
