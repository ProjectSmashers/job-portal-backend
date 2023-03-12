const express = require("express");
const routerJob = express.Router();

const {getJobById,getJobByCompanyId} = require('../controllers/job/getJobById')
const  {searchJob, searchJobByCompanyName}  = require('../controllers/job/searchJob')

routerJob
.get('/search',searchJob)
.get('/jobbyid/:id',getJobById)
.get('/searchjobbyCompany',searchJobByCompanyName)
.get('/searchjobbycompanyid/:id',getJobByCompanyId)



module.exports = routerJob;