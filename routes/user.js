const express = require("express");
const { register, userLogin } = require("../controllers/user");
const usersRouter = express.Router();
usersRouter.post("/register", register);
usersRouter.post("/login", userLogin);
usersRouter.use("/", (req, res) => {
  res.json("it's working");
});

module.exports = usersRouter;
