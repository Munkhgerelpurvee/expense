const { Router } = require("express");
const { login, register } = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/Log-in", login).post("/register", register);

module.exports = { authRouter };
