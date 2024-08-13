const { Router } = require("express");
// contollers -c import hiine
const {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/account.controller");

// router object-ийг үүсгэнэ.
const accountRouter = Router();

// функц болгоныг router-тэй холбож өгнө.
accountRouter
  .get("/", getAllAccounts)
  .post("/", createAccount)
  .get("/:id", getAccountById)
  .put("/:id", updateAccount)
  .delete("/:id", deleteAccount);

module.exports = { accountRouter };
