const mongoose = require('mongoose');
const Company = require('../model/Company');
const Candidate = require('../model/Candidate')

const interestedCandidateSchema = new mongoose.Schema({

    jobId: 
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        // unique:true
    },

    interestedCandidates : [

        
        {
            candId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Candidate'
            }
        },
    ],

    selectedCandidates : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Candidate'
        }
    ]

})

module.exports = mongoose.model('InterestedCandidate', interestedCandidateSchema);
