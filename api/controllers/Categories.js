const mongoose = require("mongoose");
const Category = require("../models/Category");

module.exports = {
  getAllCategories: (req, res) => {
    Category.find()
      .then((categories) => {
        res.status(200).json({
          categories,
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
  createCategory: (req, res) => {
    const { title, description } = req.body;
    const category = new Category({
      _id: new mongoose.Types.ObjectId(),
      title,
      description,
    });

    category
      .save()
      .then(() => {
        res.status(200).json({
          message: "Create a new category",
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
  getCategory: (req, res) => {
    categoryId = req.params.categoryId;
    Category.findById(categoryId)
      .then((category) => {
        res.status(200).json({ category });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
  updateCategory: (req, res) => {
    const categoryId = req.params.categoryId;

    Category.update({ _id: categoryId }, req.body)
      .then(() => {
        res.status(200).json({
          message: "Category Updated",
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
  deleteCategory: (req, res) => {
    const categoryId = req.params.categoryId;

    Category.deleteOne({ _id: categoryId })
      .then(() => {
        res.status(200).json({
          message: `Delete article ${categoryId} now my friend`,
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
};
