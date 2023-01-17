const Company = require("../model/Company");

const updateCompany = async (req, res, next) => {
    const companyId = req.params.id;
    console.log(companyId)
    try {
        const company = await Company.findOneAndUpdate({_id: companhyId},
            {
                $set: {

                    companyName: req.body.companyName,

                   address: {
                     state: req.body.address.state,
                     city: req.body.address.city,
                     pinCode: req.body.address.pinCode,
                     addressLine2: req.body.address.addressLine2,
                     addressLine1: req.body.address.addressLine1
            
                   }
                    
                }
            }, { new: true, useFindAndModify: false });

        console.log(comoany);
        res.status(200).json({
            statuscode: 1,
            message: "Updated",
            data: company
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