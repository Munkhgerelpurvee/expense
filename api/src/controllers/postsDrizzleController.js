const { db } = require("../database/index.js");
const { posts } = require("../database/schema.js");
const { eq } = require("drizzle-orm");

const getPosts = async (_, res) => {
  const posts = await db.query.posts.findMany({
    where: eq(posts.userId, req.user.id),
  });

  res.json(posts);
};

const createPost = async (req, res) => {
  const userId = req.user.id;
  console.log(userId);

  const { title, content } = req.body;

  const post = await db
    .insert(posts)
    .values({ title, content, userId })
    .returning();

  res.json(post);
};
module.exports = { getPosts, createPost };
