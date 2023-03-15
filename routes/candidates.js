const express = require("express");
const routerCandidate = express.Router();

const getAllCandidates = require("../controllers/candidate/getAllCandidates");
const setCandidate = require("../controllers/candidate/setCandidate");
const updateBasicDetail = require("../controllers/candidate/updateBasicDetail");
const getCandidateById = require("../controllers/candidate/getCandidateById");
const updateCertificatesById = require("../controllers/candidate/updateCertificatesById");
const updatePreviousEmployment = require("../controllers/candidate/updatePrevEmp");
const updateJobPreference = require("../controllers/candidate/updateJobPreference");
const updateSkill = require("../controllers/candidate/updateSkill");
const updateEducation =require("../controllers/candidate/updateEducation");

const {register,auth} = require("../controllers/candidate/auth")
const updateEducationByCandidateId = require('../controllers/candidate/updateEducationByCandidateId')
const updateSkillByCandidateId = require('../controllers/candidate/updateSkillByCandidateId')

const authmiddle = require('../middleware/auth')

const {getAllJobs,getAllJobsApplied,getAllJobsAppliedList} = require('../controllers/candidate/getAllJobsApplied')


routerCandidate
  .get("/", getAllCandidates)
  .get("/:id", getCandidateById)
  .post("/", setCandidate)
  .put("/:id/basicdetail", updateBasicDetail)
  .put("/:id/updateskill", updateSkill)
  .put("/:id/updatecertificate", updateCertificatesById)
  .put("/:id/updateprevemp", updatePreviousEmployment)
  .put("/:id/updatejobpreference", updateJobPreference)
  .put("/:id/updateeducation", updateEducation)
  .put("/:id/updateeducationbycandidateid", updateEducationByCandidateId)
  .put("/:id/updateskillbycandidateid",updateSkillByCandidateId)
  .post("/signup",register)
  .post("/login",auth)
  .post("/:id/updateEducation", updateEducationByCandidateId)
  .post("/:id/updateskillbycandidateid",updateSkillByCandidateId)

  .get("/jobs/getalljobsno",getAllJobs)
  .get("/:id/jobs/getalljobsno",getAllJobsApplied)
  .get("/:id/jobs/getjoblistapplied",getAllJobsAppliedList);

/*
router.post('/', (req, res) => {
  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: candidates.length + 1,
    name: req.body.name
  };
  candidates.push(genre);
  res.send(genre);
});

router.put('/:id', (req, res) => {
  const genre = candidates.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  genre.name = req.body.name; 
  res.send(genre);
});

router.delete('/:id', (req, res) => {
  const genre = candidates.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  const index = candidates.indexOf(genre);
  candidates.splice(index, 1);

  res.send(genre);
});

router.get('/:id', (req, res) => {
  const genre = candidates.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  res.send(genre);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}
*/

module.exports = routerCandidate;
