/*Create a schema called userSchema with the following fields:
firstName: String, required.
lastName: String.
age: Number.
country: String.
email: String, unique, required.
password: String, required. */


const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  age: Number,
  country: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
