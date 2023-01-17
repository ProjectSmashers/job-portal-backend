const Preset = require('../model/Preset')

exports.getAllProgrammingLanguage =async(req,res,next)=>{

    try {
        const skills = await Preset.find().select({programmingLanguage:1});
        console.log(skills);

        res.status(200).json(
            {
                statusCode:1,
                data:skills
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}

exports.updateProgrammingLanguage = async(req,res,next)=>{

    const programmingLanguage = req.body.programmingLanguage;
    console.log(programmingLanguage);

    try {
        const programmingLang = await Preset.updateOne({},{$push:{programmingLanguage:programmingLanguage}});
        console.log(programmingLang);
        res.status(200).json({
            statusCode : 1,
            data:programmingLang
        })
                
    } catch (error) {
        console.log(error);
    }

}

exports.setPreset = async(req,res,next)=>{

    const data = req.body;

    try {
        const programmingLang = await Preset.create(data);
        console.log(data);
        res.status(200).json({
            statusCode : 1,
            data:data
        })
                
    } catch (error) {
        console.log(error);
    }

}