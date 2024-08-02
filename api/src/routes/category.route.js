const { Router } = require("express");
const {
  getAllcategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter
  .get("/", getAllcategories)
  .post("/", createCategory)
  .get("/:id", getCategory)
  .delete("/:id", deleteCategory);
//   .put("/:id", updateCategory)

module.exports = { categoryRouter };
