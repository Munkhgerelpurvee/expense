const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

//200ok

const getAllcategories = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//200 ok
const createCategory = async (req, res, next) => {
  console.log(req.body, "Where are you!");
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);
    const newCategory = {
      ...req.body,
      id: v4(),
    };

    console.log(newCategory);
    categories.push(newCategory);
    fs.writeFileSync(filePath, JSON.stringify(categories));
    res.json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// 200 ok
const getCategory = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);

    const id = req.params.id;
    const data = categories.find((el) => el.id === id);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//200ok
const deleteCategory = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const categories = JSON.parse(rawData);
    const id = req.params.id;
    // delete hiij bui heseg
    const data = categories.filter((el) => el.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllcategories,
  createCategory,
  getCategory,
  deleteCategory,
};
