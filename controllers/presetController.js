const Preset = require('../model/Preset')

exports.getAllProgrammingLanguage =async(req,res,next)=>{

    try {

        const programmingLanguages = await Preset.find().select({programmingLanguage:1,_id:0});
        console.log(programmingLanguages);


        res.status(200).json(
            {
                statusCode:1,

                data:programmingLanguages

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



exports.getAllLanguage =async(req,res,next)=>{

    try {
        const languages = await Preset.find().select({languages:1,_id:0});
        console.log(languages);

        res.status(200).json(
            {
                statusCode:1,
                data:languages
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateLanguage = async(req,res,next)=>{

    const language = req.body.language;
    console.log(language);

    try {
        const languages = await Preset.updateOne({},{$push:{languages:language}});
        console.log(languages);
        res.status(200).json({
            statusCode : 1,
            data:languages
        })
                
    } catch (error) {
        console.log(error);
    }

}


exports.getAllTools =async(req,res,next)=>{

    try {
        const tools = await Preset.find().select({tools:1,_id:0});
        console.log(tools);

        res.status(200).json(
            {
                statusCode:1,
                data:tools
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateTools = async(req,res,next)=>{

    const tools = req.body.tool;
    console.log(tools);

    try {
        const tool = await Preset.updateOne({},{$push:{tools:tools}});
        console.log(tool);
        res.status(200).json({
            statusCode : 1,
            data:tool
        })
                
    } catch (error) {
        console.log(error);
    }

}

exports.getAllLocations =async(req,res,next)=>{

    try {
        const locations = await Preset.find().select({location:1,_id:0});
        console.log(locations);

        res.status(200).json(
            {
                statusCode:1,
                data:locations
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateLocation = async(req,res,next)=>{

    const location = req.body.location;
    console.log(location);

    try {
        const locations = await Preset.updateOne({},{$push:{location:location}});
        console.log(locations);
        res.status(200).json({
            statusCode : 1,
            data:locations
        })
                
    } catch (error) {
        console.log(error);
    }

}


exports.getAllStreams =async(req,res,next)=>{

    try {
        const streams = await Preset.find().select({stream:1,_id:0});
        console.log(streams);

        res.status(200).json(
            {
                statusCode:1,
                data:streams
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}




exports.updateStream = async(req,res,next)=>{

    const stream = req.body.stream;
    console.log(stream);

    try {
        const streams = await Preset.updateOne({},{$push:{stream:stream}});
        console.log(streams);
        res.status(200).json({
            statusCode : 1,
            data:streams
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