const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./server/logger');
const countryRouter = require('./server/routers/countries');

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/countries', countryRouter);


module.exports = app;