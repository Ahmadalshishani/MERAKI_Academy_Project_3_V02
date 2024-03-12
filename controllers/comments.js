const { json } = require("express");
const commentModel = require("../models/commentSchema");

const createNewComment = (req, res) => {
    const { comment, commenter } = req.body;
    const {articleId}= req.params
    const newComment = new commentModel({
      comment,
      commenter,
    });
  
    newComment
      .save()
      .then((resulte) => {
        res.status(201).json({
          success: true,
          message: "Comment created",
          comment: resulte,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(409).json({
          success: false,
          message: "Server Error",
          err,
        });
      });
  };
  module.exports={
    createNewComment

  }