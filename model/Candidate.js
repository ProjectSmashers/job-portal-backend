const mongoose = require('mongoose');
const { ProgrammingLanguage, Language, Location, Tool, Stream } = require('./Preset');

const candidateSchema = new mongoose.Schema({

    test: String,

    basicDetail: {

        name: {
            type: String,
            //require: true,
        },

        dateOfBirth: {
            type: Date,
            //required: true,
        },

        address: {
            type: String,

        },

        gender: {
            type: String,
            enum: {
                values: ['Male', 'Female', 'Other'],
                message: '{VALUE} is not supported'
            }

        },

        mobileNo: {
            type: Number,
            min: [1000000000, "Mobile no. must have 10 digits"],
            unique: true,
            //required: true
        },

        email: {
            type: String,
            unique: true,
            // required: true

        },

        bio: {
            type: String,

        }
    },

    education: [{
        nameOfInstitute: {
            type: String,
            //required: true,

        },

        nameOfUniversity: {
            type: String,
            //required: true,

        },


        stream: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stream'
        },

        admissionYear: {
            type: Date,
            //required: true,

        },

        passingYear: {
            type: Date,
            //required: true,

        },

        aggregate: {
            type: Number,
            //required: true
        },


    }
    ],

    skills: {


        languages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Language'

            }
        ],

        programmingLanguages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProgrammingLanguage'
            }
        ],

        tools: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tool'
            }
        ]


    },

    previousEmployement: [
        {
            nameOfCompany: {
                type: String
            },

            duration: {
                type: Number
            }
        }
    ],

    certificates: [
        {
            certificateName: {
                type: String
            },

            issuedBy: {
                type: String,
            },

            issueDate: {
                type: Date,

            },

            credential: {
                type: String,
                //required: true
            }
        }
    ],

    jobPreference: {
        location: [
            {
                type: String,
            }
        ],

        modeOfJob: {
            type: String,
            enum: {
                values: ['Work from home', 'On site', 'Hybrid'],
                message: '{VALUE} is not supported'
            }

        }
    }


});


//     jobPreference: [{

//             location: 
//             {
//                 type: String,
//             }
//         ,

//         modeOfJob: {
//             type: String,
//             enum: {
//                 values: ['Work from home', 'On site', 'Hybrid'],
//                 message: '{VALUE} is not supported'
//             }

//         }
//     }]


// });

module.exports = mongoose.model('Candidate', candidateSchema);