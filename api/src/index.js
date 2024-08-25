const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// const logger = require("./middleware/logger");
// Router оруулж ирэх
// const { accountRouter } = require("./routes/account.route");
// const { categoryRouter } = require("./routes/category.route");
//
const { authRouter } = require("./routes/auth.route");
const { userRouter } = require("./routes/user.route");
const { authMiddleware } = require("./middleware/auth.middleware");
// drizzle routes
const { postsRouter } = require("./routes/posts.route");
const { categoryRouter } = require("./routes/category.drizzle.route");
const { recordRouter } = require("./routes/record.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// use  функцийг ашиглан төрөл бүрийн Express-н midlleware-ийг холбодог.
// app.use(logger);
app.use("/auth", authRouter);
//
// app.use("/users", userRouter);
// app.use("/api/accounts", accountRouter);
// app.use("/api/categories", categoryRouter);
//
// drizzle routes
app.use("/posts", postsRouter);
app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/records", recordRouter);

// expense.mn Rest Api Backend
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
//
// trackerTest.mn Rest API  with DRIZZLE
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
