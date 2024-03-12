const express = require("express");
const {
  getAllArticles,
  createNewArticle,
  getArticlesByAuthor,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  deleteArticlesByAuthor,
  createNewComment,
} = require("../controllers/articles");

// create articles router
const articlesRouter = express.Router();
articlesRouter.post("*", createNewArticle);
// endpoint for the GET request
articlesRouter.get("/", getAllArticles);
articlesRouter.get("/search_1", getArticlesByAuthor);
articlesRouter.get("/search_2/:id", getArticleById);
articlesRouter.put("/:id", updateArticleById);
articlesRouter.delete("/:id", deleteArticleById);
articlesRouter.delete("/:id/author", deleteArticlesByAuthor);
articlesRouter.post("/:articleId/comments",createNewComment)

module.exports = articlesRouter;
