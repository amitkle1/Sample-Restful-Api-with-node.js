const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/Categories");

router.get("/", getAllCategories);
router.post("/", createCategory);
router.patch("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);
module.exports = router;
