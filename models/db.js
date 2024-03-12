// DB connection goes here
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/project_3")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });
