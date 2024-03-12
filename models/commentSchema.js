/*Create a schema called commentSchema with the following fields:
comment: String, required.
commenter: ObjectId ⇾ from userSchema . */

const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const commentModel = mongoose.model("Comment", commentSchema);
module.exports = commentModel;
