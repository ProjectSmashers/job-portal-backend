const { Job, Company } = require('../../model/Company')
const fetch = require('cross-fetch')

const searchJob = async (req, res) => {

    const {positionName} = req.query;
    console.log('The query object is ', positionName);
    const queryObject = {}

    if(positionName){
        queryObject.positionName = { $regex:positionName, $options:"i" };
    }

    console.log(queryObject)

    // res.status(200).send('Response is going')


    try {
        const result = await Job.find(queryObject).populate('companyId','companyName');

        if (result.length>=1) {
            res.status(200).json({
                statusCode: 1,
                message: 'Success',
                data: result
            })
        } else {
            res.status(400).json({
                statusCode: -1,
                message: 'Not found any jobs'
            })
        }
    } catch (err) {
        res.status(500).json({
            statusCode: 0,
            message: err.message
        })
    }



}

const searchJobByCompanyName = async(req,res)=>{
    const {companyName} = req.query;
    console.log('The query object is ', companyName);
    const queryObject = {}

    if(companyName){
        queryObject.companyName = { $regex:companyName, $options:"i" };
    }

    console.log(queryObject)

    // res.status(200).send('Response is going')


    try {
        const result = await Company.find(queryObject);
        let companyId = null

        if (result.length>=1) {
            // res.status(200).json({
            //     statusCode: 1,
            //     message: 'Success',
            //     data: result
            // })

            companyId = result[0]._id;
            console.log(companyId);
        } else {
            res.status(400).json({
                statusCode: -1,
                message: 'Not found any jobs'
            })
        }

        const url = 'http://localhost:7000/api/job/searchjobbycompanyid/'+companyId;
        console.log(url);

        fetch(url)
        .then(res=>res.json())
        .then (data =>
            {
                console.log(data);

                res.status(200).json({
                    success:true,
                    data: data.data
                })
            }
            )



    } catch (err) {
        res.status(500).json({
            statusCode: 0,
            message: err.message
        })
    }


}

exports.searchJob = searchJob;
exports.searchJobByCompanyName = searchJobByCompanyName;