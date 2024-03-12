const userModel = require("../models/userSchema");
const register = (req, res) => {
  const { firstName, lastName, age, country, email, password } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
  });

  newUser
    .save()
    .then((resulte) => {
      res.status(201).json({
        success: true,
        message: "Account Created Successfully",
        author: resulte,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
      });
    });
};

const userLogin = (req, res) => {
  const { email, password } = req.body;

  userModel
    .findOne({ email, password })
    .then((resulte) => {
      console.log(resulte);
      if (resulte.email != email || resulte.password != password) {
        res.status(401).json({
          success: false,
          message: "Invalid login credentials",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Valid login credentials",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json(err);
    });
};

module.exports = {
  register,
  userLogin,
};
