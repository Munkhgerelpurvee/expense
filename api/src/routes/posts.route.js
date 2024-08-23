const { Router } = require("express");
const {
  getPosts,
  createPost,
} = require("../controllers/postsDrizzleController");

const postsRouter = Router();

postsRouter.get("/", getPosts);
postsRouter.post("/", createPost);
module.exports = { postsRouter };
