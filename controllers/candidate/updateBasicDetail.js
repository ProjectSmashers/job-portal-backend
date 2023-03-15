const {Candidate} = require("../../model/Candidate");

const updateCandidate = async (req, res, next) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);
  try {
    const candidate = await Candidate.updateMany(
      { _id: uniqueID },
      {
        $set: {
          //name: req.body.name,
         
            
            
            'basicDetail.dateOfBirth': req.body.dateOfBirth,
            'basicDetail.address': req.body.address,
            'basicDetail.gender': req.body.gender,
            'basicDetail.mobileNo': req.body.mobileNo,
            'basicDetail.bio': req.body.bio,
          
        },
      },
      { new: true, useFindAndModify: false }
    );

    console.log(candidate);
    res.status(200).json({
      statusCode: 1,
      message: "Updated",
      data: candidate,
    });
  } catch (err) {
    console.error("Some error occured");
    res.status(500).json({
      statusCode: 0,
      message: "Failed",
    });
    console.error(err);
  }
};

module.exports = updateCandidate;
