const express = require("express");
const routerInterested = express.Router();

const {addCandidateToInterested,test} =  require('../controllers/interestedCandidate')


routerInterested
.post('/',addCandidateToInterested)
.get('/',test)


module.exports = routerInterested;