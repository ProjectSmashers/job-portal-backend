const express = require('express');
const routerCompany = express.Router();

const setCompany = require('../controllers/setCompany');
const updateCompany = require('../controllers/updateCompany');
const Company = require('../model/Company');


routerCompany
  .post('/', setCompany)
  .put('/:id/companydetails', updateCompany)
 




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

module.exports = routerCompany;