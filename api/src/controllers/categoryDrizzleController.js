const { db } = require("../database/index.js");
const { categories } = require("../database/schema.js");

const getCategories = async (_, res) => {
  const categories = await db.query.categories.findMany();

  res.json(categories);
};

const createCategory = async (req, res) => {
  const { categoryName, iconName, selectedColor } = req.body;

  const category = await db
    .insert(categories)
    .values({ categoryName, iconName, selectedColor })
    .returning();

  res.json(category);
};
module.exports = { getCategories, createCategory };
