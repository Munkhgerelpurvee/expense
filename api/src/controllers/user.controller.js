const { db } = require("../database/index.js");
const { users } = require("../database/schema.js");

const getMe = async (req, res) => {
  try {
    const user = req.user;

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//
const getUsers = async (req, res) => {
  const users = await db.query.users.findMany({
    with: {
      posts: true,
    },
  });

  res.json(users);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(req.body, "JJJ");

  const user = await db
    .insert(users)
    .values({ username, email, password })
    .returning();

  res.json(user);
};

module.exports = { getMe, getUsers, createUser };
