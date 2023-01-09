
const Candidate = require('../model/Candidate')

const createCandidate = async (req, res, next) => {

    try {
        const setDetail = await Candidate.create({
            basicDetail: {
                name: req.body.basicDetail.name,
                gender: req.body.basicDetail.gender,
                mobileNo: req.body.basicDetail.mobileNo,
                email: req.body.basicDetail.email,
            }
        });

        console.log(setDetail);
        res.status(200).json({
            statusCode: 1,
            message: 'Success',
            data: setDetail
        })
    } catch (err) {
        console.error('Some error occured');
        console.log(err);
    }


};

module.exports = createCandidate;


