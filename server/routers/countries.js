const express = require('express');
// or: const { Router } = require('express').Router();

const countryController = require('../controllers/country');
const countryRouter = express.Router();

countryRouter.get('/', countryController.index);
countryRouter.get('/:countryName', countryController.show);
countryRouter.post('/', countryController.create)
countryRouter.delete('/:countryName', countryController.destroy)
countryRouter.patch('/:countryName', countryController.update);
module.exports = countryRouter;