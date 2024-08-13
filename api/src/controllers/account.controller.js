const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

//200ok

const getAllAccounts = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    res.json(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//200ok
const createAccount = async (req, res, next) => {
  console.log(req.body, "Where are you!");
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const newAccount = {
      ...req.body,
      id: v4(),
    };

    console.log(newAccount);
    accounts.push(newAccount);
    fs.writeFileSync(filePath, JSON.stringify(accounts));
    res.json(newAccount);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//200ok
const getAccountById = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const id = req.params.id;
    const account = accounts.find((el) => el.id === id);
    if (account) {
      res.json(account);
    } else {
      res.status(404).json({ error: "Account not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// энэ хэсгийг ажиллагаатай болгох
const updateAccount = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const id = req.params.id;
    const data = accounts.find((el) => el.id === id);

    // array splice() - use then writeFileSync hiih

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//200ok
const deleteAccount = async (req, res, next) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const id = req.params.id;
    // delete hiij bui heseg
    const data = accounts.filter((el) => el.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllAccounts,
  createAccount,
  getAccountById,
  updateAccount,
  deleteAccount,
};
