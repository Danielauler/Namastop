import 'babel-polyfill';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import serverTreatment from './server';
import { log, normalizePort } from './utils';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:password@ds239648.mlab.com:39648/db_name')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})
export default app;
