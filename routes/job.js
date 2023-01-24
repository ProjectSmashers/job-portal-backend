const express = require("express");
const routerJob = express.Router();

const getJobById = require('../controllers/job/getJobById');
const updateJob = require('../controllers/job/updateJob');
const insertJobById = require('../controllers/job/insertJobById');

routerJob
    .get('/:id', getJobById)
    .put('/:id/insert', insertJobById)
    .put('/:id', updateJob);

module.exports = routerJob;
