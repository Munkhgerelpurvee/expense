const { Router } = require("express");
const {
  getCategories,
  createCategory,
} = require("../controllers/categoryDrizzleController");

const categoryRouter = Router();
categoryRouter.get("/", getCategories);
categoryRouter.post("/", createCategory);

module.exports = { categoryRouter };
