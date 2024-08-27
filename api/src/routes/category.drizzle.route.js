const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  getOneCategory,
} = require("../controllers/categoryDrizzleController");

const categoryRouter = Router();
categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.get("/:id", getOneCategory);

module.exports = { categoryRouter };
