const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./server/logger');

app.use(cors());
app.use(express.json());
app.use(logger);

module.exports = app;