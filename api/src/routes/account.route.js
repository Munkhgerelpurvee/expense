const { Router } = require("express");
const {
  getAllAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/account.controller");

const accountRouter = Router();

accountRouter
  .get("/", getAllAccounts)
  .post("/", createAccount)
  .get("/:id", getAccount)
  .put("/:id", updateAccount)
  .delete("/:id", deleteAccount);

module.exports = { accountRouter };
