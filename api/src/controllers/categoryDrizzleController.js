const { db } = require("../database/index.js");
const { categories } = require("../database/schema.js");
const { eq } = require("drizzle-orm");

// const getCategories = async (_, res) => {
//   const categories = await db.query.categories.findMany();

//   res.json(categories);
// };
// CRUD:Get
const getAllCategories = async (req, res) => {
  try {
    const categoriesData = await db.query.categories.findMany({
       // ASK???
      where: eq(categories.userId, req.user.id),
    });

    res.json(categoriesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching categories" });
  }
};
// 
// const createCategory = async (req, res) => {
//   const { categoryName, iconName, selectedColor } = req.body;

//   const category = await db
//     .insert(categories)
//     .values({ categoryName, iconName, selectedColor })
//     .returning();

//   res.json(category);
// };
// CRUD:Post
const createCategory = async (req, res) => {
  const { categoryName, iconName, selectedColor } = req.body;
  try {
    const [newCategory] = await db
      .insert(categories)
      .values({
        name: categoryName,
        iconName: iconName,
        selectedColor:selectedColor,
        userId: req.user.id,
      })
      .returning();

    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating category" });
  }
};
// CRUD:Delete
const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const removedCategory = await db
      .delete(categories)
      .where(eq(categories.id, categoryId));

    res.json(removedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting category" });
  }
};
module.exports = {createCategory, getAllCategories, deleteCategory };
