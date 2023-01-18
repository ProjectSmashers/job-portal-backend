const Company = require("../model/Company");

const updateCompany = async (req, res, next) => {
    const companyId = req.params.id;
    console.log(companyId);
    let updateData = {};
    try {

         if (req.body.hasOwnProperty("companyName")) {
            updateData.name = req.body.companyName;
         }
   
         if (req.body.hasOwnProperty("address")) {
           updateData.address = req.body.address;
         }
   
         if (req.body.hasOwnProperty("headCount")) {
           updateData.headCount = req.body.headCount;
         }
 
         if (req.body.hasOwnProperty("hrContactDetail")) {
         updateData.hrContactDetail = req.body.hrContactDetail;
         }
   
        Company.findOneAndUpdate({ _id: req.params.id }, updateData,
                            { new: true, useFindAndModify: false });

        console.log(updateData);
        res.status(200).json({
            statuscode: 1,
            message: "Updated",
            data: updateData
        })
    }

    catch (err) {
        console.error('Some error occured');
        res.status(500).json({
            statusCode: 0,
            message: 'Failed'
        })
        console.error(err);
    }

}   

module.exports = updateCompany;