const { Router } = require("express");
const { getMe } = require("../controllers/user.controller");
//
// const { getUsers, createUser } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/me", getMe);
// userRouter.get("/", getUsers);
// userRouter.post("/", createUser);

module.exports = { userRouter };
