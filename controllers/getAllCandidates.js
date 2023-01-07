const Candidate = require('../model/Candidate')

const getAllCandidates = async(req, res) => {

    try {

        const candidates = await Candidate.find();
        res.status().json(
            {
                message:'success',
                data: candidates
            }
        )
    }catch(err){
        
    }

}