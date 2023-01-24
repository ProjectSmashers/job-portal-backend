const express = require('express');
const router = express.Router();


const { getAllProgrammingLanguage,
    updateProgrammingLanguage,
    setPreset,
    getAllLanguage,
    updateLanguage,
    getAllTools,
    updateTools,
    getAllLocations,
    updateLocation,
    getAllStreams,
    updateStream

} = require('../controllers/presetController');



router
    .post('/', setPreset)


    .get('/programminglanguage', getAllProgrammingLanguage)
    .put('/programminglanguage', updateProgrammingLanguage)

    .get('/languages', getAllLanguage)
    .put('/languages', updateLanguage)

    .get('/tools', getAllTools)
    .put('/tools', updateTools)

    .get('/locations', getAllLocations)
    .put('/locations', updateLocation)

    .get('/streams', getAllStreams)
    .put('/streams', updateStream)

module.exports = router;