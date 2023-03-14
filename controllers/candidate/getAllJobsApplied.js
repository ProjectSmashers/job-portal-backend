const {Job} = require('../../model/Company');
const InteresetedCandidate = require('../../model/InteresetedCandidate');

exports.getAllJobs = async(req,res) =>{

    try{
        // console.log('This controller is calling');
        const noOfJobs = await Job.find().count();
        res.status(200).json({
            statusCode:1,
            message:'Success',
            data:noOfJobs
        })
    }catch(err){
        res.status(500).json({
            statusCode:0,
            message:err.message
        })

    }



}


exports.getAllJobsApplied = async(req,res) =>{
    try{
        // console.log('This controller is calling');
        const candidateId= req.params.id
        const noOfJobs = await InteresetedCandidate.find({'interestedCandidates.candId':{$eq:candidateId}}).count();
        res.status(200).json({
            statusCode:1,
            message:'Success',
            data:noOfJobs
        })
    }catch(err){
        res.status(500).json({
            statusCode:0,
            message:err.message
        })

    }
}

exports.getAllJobsAppliedList = async(req,res) =>{
    try{
        // console.log('This controller is calling');
        const candidateId= req.params.id
        const jobsList = await InteresetedCandidate
                            .find({'interestedCandidates.candId':{$eq:candidateId}},{interestedCandidates:0,selectedCandidates:0})
                            .populate({ 
                                path: 'jobId',
                                populate: {
                                  path: 'companyId',
                                  model: 'Company',
                                  select:'companyName'
                                } 
                             })
                             .exec()
        res.status(200).json({
            statusCode:1,
            message:'Success',
            data:jobsList
        })
    }catch(err){
        res.status(500).json({
            statusCode:0,
            message:err.message
        })

    }
}