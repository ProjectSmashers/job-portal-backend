
const {Candidate} = require("../../model/Candidate");

const updateEducationByCandidateId = async (req, res, next) => {
    
    const education = {
        nameOfInstitute:req.body.nameOfInstitute,
        nameOfUniversity:req.body.nameOfUniversity,
        stream: req.body.stream,
        admissionYear:req.body.admissionYear,
        passingYear:req.body.passingYear,
        aggregate: req.body.aggregate
    }


    try {
        let candidate = await Candidate.findById(req.params.id);
        candidate.education.push(education);
        try{
            const result = await candidate.save();

            res.status(200).json({
                statusCode:1,
                message:'Success',
                data: result
            })


        }catch(err){
            res.status(500).json({
                statusCode:1,
                message:err.message
            })
        }



    } catch (error) {
        res.status(500).json({
            statusCode:1,
            message:err.message
        })
    }

}

module.exports = updateEducationByCandidateId;