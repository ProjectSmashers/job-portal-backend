const {Company} = require("../../model/Company");

const updateAddressById = async (req, res, next) => {
    const companyId  = req.params.id;
    const { state, city, pinCode, addressLine1 } = req.body;
  
    try {
      const updatedCompanyAddress = await Company.findByIdAndUpdate(companyId, {
        $set: {
          'address.state': state,
          'address.city': city,
          'address.pinCode': pinCode,
          'address.addressLine1': addressLine1
        }
      }, { new: true });
      res.status(200).json({
        statusCode:1,
        message:'Success',
        
    })
    console.log(res);

  
    
    } catch (error) {
      res.status(500).json({ 
        statusCode : 1,
        message: 'Failed to update Company address.' 
    });
        console.log(error);
    }
  }
  
  

module.exports = updateAddressById;

// const updateAddressById = async (req, res, next) => {
    
//     const address = {
//         state:req.body.state,
//         city:req.body.city,
//         pinCode: req.body.pinCode,
//         addressLine1:req.body.addressLine1
//     }


//     try {
//         let company = await Company.findById(req.params.id);
//          Company.address.push(address);
//         try{
//             const result = await company.save();

//             res.status(200).json({
//                 statusCode:1,
//                 message:'Success',
//                 data: result
//             })
            
//         }catch(error){
//             res.status(500).json({
//                 statusCode:1,
//                 message:error.message
//             })
//             console.log(error);
//         }



//     } catch (error) {
//         res.status(500).json({
//             statusCode:1,
//             message:error.message
//         })
//         console.log(error);
//     }

// }
