const Candidate = require("../model/Candidate");

const updateCandidate = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const updateCandidate = await Candidate.findOneAndUpdate({ _id: uniqueID },
            {
                $set: {
                    basicDetail: {
                        name: req.body.basicDetail.name,
                        gender: req.body.basicDetail.gender,
                        mobileNo: req.body.basicDetail.mobileNo,
                        email: req.body.basicDetail.email
                    }
                }
            }, { new: true, useFindAndModify: false });

        console.log(updateCandidate);
        res.status(200).json({
            statusCode: 1,
            message: 'Updated',
            data: updateCandidate
        })
    }
    catch (err) {
        console.log(err)
    }
}


module.exports = updateCandidate;
