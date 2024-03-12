// 1. this function return all articles
const { json } = require("express");
const articleModel = require("../models/articleSchema");

const getAllArticles = (req, res) => {
  articleModel
    .find({})
    .then((resulte) => {
      res.status(200).json({
        success: true,
        message: "All the articles",
        articles: resulte,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};
const createNewArticle = (req, res) => {
  const { title, description, author } = req.body;
  const newArticle = new articleModel({
    title,
    description,
    author,
  });

  newArticle
    .save()
    .then((resulte) => {
      res.status(201).json({
        success: true,
        message: "Article created",
        article: resulte,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};

const getArticlesByAuthor = (req, res) => {
  const { Key, Value } = req.body;
  const author = Value;
  console.log({ author });
  articleModel
    .find({ author })
    .then((resulte) => {
      console.log(Value);
      if (resulte.length === 0) {
        res.status(404).json({
          success: false,
          message: `The author => ${Value} has no articles`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `All the articles for the author: ${Value}`,
          articles: resulte,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};

const getArticleById = (req, res) => {
  const { id } = req.params;
  articleModel
    .findById(id)
    .populate({ path: "author", select: "firstName" })
    .then((resulte) => {
      res.status(200).json({
        success: true,
        message: `The article ${id}`,
        articles: resulte,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};

const updateArticleById = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  articleModel
    .findByIdAndUpdate(id, { title, description }, { new: true })
    .then((resulte) => {
      console.log({ id });
      res.status(201).json({
        success: true,
        message: "Article updated",
        article: resulte,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};

const deleteArticleById = (req, res) => {
  const { id } = req.params;

  articleModel
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Article deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};

const deleteArticlesByAuthor = (req, res) => {
  const { id } = req.params;
  const author = id;
  articleModel
    .findOneAndDelete({ author })
    .then((resulte) => {
      console.log(resulte);
      if (resulte === null) {
        res.status(404).json({
          success: false,
          message: "No articles for this author",
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Deleted articles for the author => ${author}`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server Error",
        err,
      });
    });
};


module.exports = {
  getAllArticles,
  createNewArticle,
  getArticlesByAuthor,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  deleteArticlesByAuthor,
};
