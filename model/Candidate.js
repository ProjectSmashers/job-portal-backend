const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({

    test:String,

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
            //required: true

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
            type: String,
            //required: true,

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
            { type: String, }
        ],

        programmingLanguages: [
            { type: String }
        ],

        tools: [
            {
                type: String,
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