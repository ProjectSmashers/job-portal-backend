const Candidate = require('../model/Candidate')

const createCandidate = async(req, res, next)=>{

    const testCandidate = new Candidate({
        basicDetail: {
            name: 'Anthony',
            address:'Delhi',
            gender: 'Male',
            mobileNo: 9090987687,
            email: 'anthony@MediaList.com',
        },
    
        education: [{
            nameOfInstitute: 'IIT delhi',
            nameOfUniversity: 'IIT Delhi',
            stream: 'CSE',
            aggregate: 78.8
         }
        ]
    });

    try{
        // if(Candidate.find({}))
        const candidate = await Candidate.create(req.body);

        console.log(candidate);
        res.status(200).json({
            statusCode : 1,
            message: 'Success',
            data: candidate
        })
    }catch(err){
        console.error('Some error occured');
    }


};

module.exports = createCandidate;


