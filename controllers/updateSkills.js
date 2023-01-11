const Candidate = require("../model/Candidate");

const updateSkill = async (req, res, next) => {
    const uniqueID = req.params.id
    console.log(uniqueID)
    try {
        const candidate = await Candidate.findOneAndUpdate({ _id: uniqueID },
            {
                $set: {
                    skills: {

                        softSkill: {
                            language: [req.body.skills.softSkill.language]
                        },

                        hardSkill: {
                            programmingLanguages: [req.body.skills.hardSkill.programmingLanguages],
                            tool: [req.body.skills.hardSkill.tool]
                        }
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

module.exports = updateSkill;