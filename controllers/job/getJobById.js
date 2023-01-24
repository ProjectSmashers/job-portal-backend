const Job = require("../../model/Company");


const getJobById = async (req, res) => {
  const uniqueID = req.params.id;
  console.log(uniqueID);


  try {

    const job = await Job.findById({ _id: uniqueID }, 'jobPosting', (err, job) => {
      if (err) {
        console.log(err);
        res.status(500).json(
          {
            error: err
          }
        )
      }
      else {
        console.log(job);
        res.status(200).json(
          {
            message: 'success',
            data: job
          }
        )
      }
    });
  } catch (err) {
    console.log(err);
  }

};

module.exports = getJobById;