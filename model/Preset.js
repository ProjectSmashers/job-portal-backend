const mongoose = require('mongoose');


const presetSchema = new mongoose.Schema({

    programmingLanguage:[
        {
            id:Number,
            name:String
        }
    ],

    languages:[
        {
            id:Number,
            name:String
        }
    ],

    tools:[
        {
            id:Number,
            name:String
        }
    ],

    location:[
        {
            id:Number,
            pinCode:Number,
            name:String
        }
    ],

    stream:[
        {
            id:Number,
            name:String
        }
    ],

});


module.exports = mongoose.model('Preset',presetSchema);