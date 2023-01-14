const express = require('express');
const router = express.Router();


const getAllCandidates = require('../controllers/getAllCandidates');
const setCandidate = require('../controllers/setCandidate');
const updateBasicDetail = require('../controllers/updateBasicDetail');
const getCandidateById = require('../controllers/getCandidateById');
const updateCertificatesById = require('../controllers/updateCertificatesById');
const updatePreviousEmployment = require('../controllers/updatePrevEmp');
const updateJobPreference = require('../controllers/updateJobPreference');
const Candidate = require('../model/Candidate');


router
  .get('/', getAllCandidates)
  .get('/:id', getCandidateById)
  .post('/', setCandidate)
  .put('/:id/basicdetail', updateBasicDetail)
  .put('/:id/updateCertificate', updateCertificatesById)
  .put('/:id/updateprevemp', updatePreviousEmployment)
  .put('/:id/updatejobpreference', updateJobPreference)




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

module.exports = router;