const Company = require('../model/Company')
const companyById = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {

        const company = await Company.findById({ _id: uniqueID }, (err, company) => {
            if (err) {
                console.log(err);
                res.status(500).json(
                    {
                        error: err
                    }
                )
            }
            else {
                console.log(company);
                res.status(200).json(
                    {
                        message: 'success',
                        data: company
                    }
                )
            }
        });
    } catch (err) {
        console.log(err);
    }

};

module.exports = companyById;