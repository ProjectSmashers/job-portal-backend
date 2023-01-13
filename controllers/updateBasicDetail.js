const Candidate = require("../model/Candidate");

const updateCandidate = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const candidate = await Candidate.findOneAndUpdate({ _id: uniqueID },
            {
                $set: {
                    basicDetail: {
                        name: req.body.basicDetail.name,
                        dateOfBirth: req.body.basicDetail.dateOfBirth,
                        address: req.body.basicDetail.address,
                        gender: req.body.basicDetail.gender,
                        mobileNo: req.body.basicDetail.mobileNo,
                        email: req.body.basicDetail.email,
                        bio: req.body.basicDetail.bio
                    }
                }
            }, { new: true, useFindAndModify: false });

        console.log(candidate);
        res.status(200).json({
            statusCode: 1,
            message: 'Updated',
            data: candidate
        })
    }
    catch (err) {
        console.error('Some error occured');
        res.status(500).json({
            statusCode: 0,
            message: 'Failed',
        })
        console.error(err);
    }
}


module.exports = updateCandidate;
