const { Candidate } = require('../../model/Candidate')

const updateSkillByCandidateId = async(req,res) =>{
    const { languages, programmingLanguages, tools } = req.body;
    
    try {
        console.log(req.params.id)
        let candidate = await Candidate.findById(req.params.id);
        console.log(candidate)

        if (languages) {
            candidate.skills.languages.push(languages)
        }
    
        if (programmingLanguages) {
            candidate.skills.programmingLanguages.push(programmingLanguages)
        }
    
    
        if (tools) {
            candidate.skills.tools.push(tools);
        }
    
        const result = await candidate.save();

        res.status(200).json({
            statusCode:1,
            message:'Success',
            data:result
        })


    } catch (error) {
        res.status(500).json({
            statusCode:0,
            message:error.message
        })
    }
}

module.exports = updateSkillByCandidateId;