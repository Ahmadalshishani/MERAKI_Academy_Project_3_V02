/*Create a schema called articleSchema with the following fields:
title: String, required.
description: String, required.
author: ObjectId ⇾ from userSchema, required.
comments: array of [ ObjectId ⇾ from commentSchema ] */

const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
const articlemodel = mongoose.model("Article", articleSchema);
module.exports = articlemodel;
