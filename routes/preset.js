const express = require('express');
const router = express.Router();

const {getAllProgrammingLanguage,updateProgrammingLanguage,setPreset} = require('../controllers/presetController');


router
.post('/',setPreset)
.get('/programminglanguage',getAllProgrammingLanguage)
.put('/programminglanguage',updateProgrammingLanguage)

module.exports = router;