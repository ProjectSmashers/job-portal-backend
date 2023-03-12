const {Candidate} = require("../../model/Candidate");


const candidateById = async (req, res, next) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);


  try {
    const candidates = await Candidate.findById({ _id: uniqueID })
                              .populate('skills.languages','name -_id')
                              .populate('skills.programmingLanguages','name -_id')
                              .populate('skills.tools','name -_id')

                              // .exec();

    if(candidates){

      res.status(200).json({
        statusCode:1,
        message:'Success',
        data:candidates
      })
    }else{
      res.status(400).json({
        statusCode:-1,
        message:'Data not found'
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode:0,
      message:err.message
     
    })
  }
};

module.exports = candidateById;
