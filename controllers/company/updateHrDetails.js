const { Company, Job } = require("../../model/Company");

const updateHrDetails = async (req, res, next) => {
  const companyId = req.params.id;
  console.log(companyId);
  const updateData = req.body;
  let updateobject = {};

  try {
    const updatedCompany = await Company.findOneAndUpdate(
      { _id: companyId },
      {
        $set: {
          "hrContactDetail.mobileNo": req.body.mobileNo,
          "hrContactDetail.email": req.body.email,
        },
      },
      { new: true, useFindAndModify: false }
    );

    console.log(updateData);
    res.status(200).json({
      statuscode: 1,
      message: "Updated",
      data: updateobject,
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

module.exports = updateHrDetails;
