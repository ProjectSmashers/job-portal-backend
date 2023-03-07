const mongoose = require('mongoose');
const Preset = require('./Preset')

const companySchema = new mongoose.Schema({

    companyName: {
        type: String,
        // required: true,
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    address: {
        state: {
            type: String,
            required: true
        },

        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Preset'
        },

        pinCode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Preset'
        },

        addressLine2: {
            type: String,
        },

        addressLine1: {
            type: String,
            required: true
        }
    },

    headCount: {
        type: Number,
        required: true
    },

    establishedYear: {
        type: Number,

    },

    aboutCompany: {
        type: String,
        required: true
    },

    hrContactDetail: {
        mobileNo: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },

    jobPosting: [
        {
            positionName: {
                type: String,
                required: true
            },

            jobDescription: {
                type: String,
                required: true
            },

            experienceNeeded: {
                type: Number,
                // required: true
            },
            typeOfJob: {
                type: String,
                enum: ["Full time", "Part time"]
            },

            modeOfJob: {
                type: String,
                enum: ["Remote", "Hybrid", "On site"]
            },

            responsibilities: {
                type: String,
                // required: true
            },

            requirement: {
                programmingLanguages: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Preset'
                    }
                ],
                tool: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Preset'
                    }
                ],
                extras: {
                    type: String
                },
                qualification: {
                    type: String
                }
            },

            lastDateOfApply: {
                type: Date
            },



        }

    ]


})

companySchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},process.env.JWT_PRIVATE_KEY);
    return token;
}

const validateCompanyy = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});

const Company = mongoose.model('Company', companySchema);

exports.Company = Company;
exports.validateRegister = validateCompanyy;
