const { readJson, saveJson } = require("../utils");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const dotenv = require("dotenv");
dotenv.config();
// drizzle
const {db} = require("../database/index");
const {users} = require("../database/schema");



const login = async (req, res) => {
  console.log(process.env.JWT_SECRET, "env====");

  // const { email, password } = req.body;
  // const users = readJson("users.json");
  // drizzle
  const {email, password} = req.body;

  // const user = users.find(
  //   (user) => user.email === email && user.password === password
  // );
  const users = await db.query.users.findMany({});
  const user = users.find((user) => user.email === email && user.password === password);

 if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  res.json({
    token,
    user: {
      username: user.username,
      email: user.email,
      id: user.id,
    },
  });
};

// const register = async (req, res) => {
//   const { username, email, password } = req.body;
//   const users = readJson("users.json");

//   const user = users.find((user) => user.email === email);

//   if (user) return res.status(400).json({ message: "User already exists" });

//   const newUser = {
//     id: v4(),
//     username,
//     email,
//     password,
//   };

//   users.push(newUser);

//   saveJson("users.json", users);

//   res.json(newUser);
// };

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await db
    .insert(users)
    .values({ name, email, password })
    .returning();

  res.json(user);
};

module.exports = { login, register };
