const {Job} = require("../../model/Company");


const getJobById = async (req, res) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);


  try {

    const job = await Job.findById({ _id: uniqueID })
                          .populate('companyId','companyName');

    res.status(200).json({
      statusCode:1,
      message:'Success',
      data:job
    })

    
  } catch (err) {

    res.status(500).json({
      statusCode:0,
      message:err.message
    })

    console.log(err);
  }

};

const getJobByCompanyId = async (req, res) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);


  try {

    const job = await Job.find({ companyId: uniqueID })
                          .populate('companyId','companyName');


    if(job.length>=1){

      res.status(200).json({
        statusCode:1,
        message:'Success',
        data:job
      })
    }else{
      res.status(400).json({
        statusCode: -1,
        message:'No jobs found'
      })
    }

    
  } catch (err) {

    res.status(500).json({
      statusCode:0,
      message:err.message
    })

    console.log(err);
  }

};

exports.getJobById = getJobById;
exports.getJobByCompanyId = getJobByCompanyId;