const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({

    companyName:{
        type: String,
        // required: true,
    },

    address:{
        state:{
            type: String,
            required: true
        },

        city:{
            type: String,
            required: true
        },

        pinCode:{
            type:Number,
            required: true,
            min:100000,
            max:999999
        },

        addressLine2:{
            type:String,
        },

        addressLine1:{
            type:String,
            required:true
        }
    },

    headCount:{
        type:Number,
        required:true
    },

    establishedYear:{
        type:Number,
        
    },

    aboutCompany:{
        type:String,
        required:true
    },

    hrContactDetail:{
        mobileNo:{
            type:Number,
            required: true
        },
        email:{
            type:String,
            required:true
        }
    },

    jobPosting:[
        {
            positionName:{
                type:String,
                required:true
            },

            jobDescription:{
                type:String,
                required:true
            },

            experienceNeeded:{
                type:Number,
                required:true
            },
            typeOfJob:{
                type:String,
                enum:["Full time","Part time"]
            },

            modeOfJob:{
                type:String,
                enum:["Remote","Hybrid","On site"]
            },

            responsibilities:{
                type:String,
                required:true
            },

            requirement:{
                programmingLanguages: [
                    { type: String }
                ],
                tool: [
                    {
                        type: String,
                    }
                ],
                extras:{
                    type:String
                },
                qualification:{
                    type:String
                }
            },

            lastDateOfApply:{
                type:Date
            },



        }

    ]


})

module.exports = mongoose.model('Company', companySchema);