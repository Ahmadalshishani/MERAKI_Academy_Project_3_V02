const express = require("express");
const{createNewComment} =require('../controllers/comments')
const commentRouter = express.Router()
commentRouter.post("/:articleId/comments")