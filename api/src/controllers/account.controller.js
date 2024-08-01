const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

//

const getAllAccounts = async (req, res) => {
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

//
const createAccount = async (req, res) => {
  console.log(req.body, "Where are you!");
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const newAccount = {
      ...req.body,
      id: v4(),
    };
    //
    console.log(newAccount);

    accounts.push(newAccount);

    fs.writeFileSync(filePath, JSON.stringify(accounts));

    res.json(newAccount);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//
const getAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const id = req.params.id;
    const data = accounts.find((el) => el.id === id);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// энэ хэсгийг ажиллагаатай болгох
const updateAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const id = req.params.id;
    const data = accounts.find((el) => el.id === id);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
//энэ хэсгийг ажиллагаатай болгох
const deleteAccount = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "accounts.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const id = req.params.id;
    const data = accounts.find((el) => el.id === id);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};
