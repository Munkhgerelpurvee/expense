const { db } = require("../database/index.js");
const { posts } = require("../database/schema.js");

const getPosts = async (_, res) => {
  const posts = await db.query.posts.findMany();

  res.json(posts);
};

const createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  const post = await db
    .insert(posts)
    .values({ title, content, userId })
    .returning();

  res.json(post);
};
module.exports = { getPosts, createPost };
