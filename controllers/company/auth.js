const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const {
  Company,
  validateRegister,
  validateLogin,
} = require("../../model/Company");
const _ = require("lodash");
const bcrypt = require("bcrypt");

// @desc to register a user
// end point POST /api/company/signup
exports.register = async (req, res) => {
  const { error } = validateRegister.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  let user = await Company.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      statusCode: -1,
      message: "User already registered",
    });
  }

  user = new Company(_.pick(req.body, ["companyName", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  res.send(_.pick(user, ["_id", "email"]));
};

exports.auth = async (req, res) => {
  console.log("Companys/login is calling");

  const { error } = validateLogin.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  let user = await Company.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      statusCode: -1,
      message: "Invalid email or password",
    });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = user.generateAuthToken();
  // req.session.token = token;
  // req.session.Id = user._id;
  res.cookie("jwt", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

  // console.log((user._id).toString() );
  const user_id = user._id.toString();
  res.cookie("Userid", user_id, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    domain: "localhost",
    path: "/",
  });

  res.header("x-auth-token", token).send(token);
};
