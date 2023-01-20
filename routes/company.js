const express = require('express');
const router = express.Router();

const getCompanyDetails = require('../controllers/getCompanyDetails');

const getCompanyById = require('../controllers/getCompanyById');


router
.get('/', getCompanyDetails)
.get('/:id',getCompanyById)

module.exports = router;