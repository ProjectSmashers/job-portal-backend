const Candidate = require('../model/Candidate')

const createCandidate = async (req, res, next) => {

    const candidate = new Candidate({
        basicDetail: {
            name: req.body.basicDetail.name,
            dateOfBirth: req.body.basicDetail.dateOfBirth,
            address: req.body.basicDetail.address,
            gender: req.body.basicDetail.gender,
            mobileNo: req.body.basicDetail.mobileNo,
            email: req.body.basicDetail.email,
            bio: req.body.basicDetail.bio
        },

        education: [{
            nameOfInstitute: req.body.education.nameOfInstitute,
            nameOfUniversity: req.body.education.nameOfUniversity,
            stream: req.body.education.stream,
            admissionYear: req.body.education.admissionYear,
            passingYear: req.body.education.passingYear,
            aggregate: req.body.education.aggregate
        }],

        skills: {

            softSkill: {
                language: [req.body.skills.softSkill.language]
            },

            hardSkill: {
                programmingLanguages: [req.body.skills.hardSkill.programmingLanguages],
                tool: [req.body.skills.hardSkill.tool]
            }
        },

        certificates: [
            {
                certificateName: req.body.certificates.certificateName,
                issuedBy: req.body.certificates.issuedBy,
                issueDate: req.body.certificates.issueDate,
                credential: req.body.certificates.credential,
            }
        ],

        jobPreference: {

            location: [req.body.jobPreference.location],
            modeOfJob: req.body.jobPreference.modeOfJob,
        }

    });

    try {
        // if(Candidate.find({}))
        const candidate = await Candidate.create(req.body);

        console.log(candidate);
        res.status(200).json({
            statusCode: 1,
            message: 'Success',
            data: candidate
        })
    } catch (err) {
        console.error('Some error occured');
        res.status(500).json({
            statusCode: 0,
            message: 'Failed',
        })
        console.error(err);
    }


};

module.exports = createCandidate;