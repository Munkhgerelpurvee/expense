const { Router } = require("express");
const {
  getAllAccounts,
  createAccount,
  deleteAccount,
} = require("../controllers/accountDrizzleController");

const accountRouter = Router();

accountRouter.get("/", getAllAccounts);
accountRouter.post("/", createAccount);
accountRouter.delete("/:id", deleteAccount);

module.exports = { accountRouter };
