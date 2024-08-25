const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory
} = require("../controllers/categoryDrizzleController");

const categoryRouter = Router();
categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", createCategory);
categoryRouter.delete("/:id", deleteCategory);



module.exports = { categoryRouter };
