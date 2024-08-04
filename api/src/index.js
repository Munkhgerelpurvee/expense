const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger")

// Router оруулж ирэх
const { accountRouter } = require("./routes/account.route");
const { categoryRouter } = require("./routes/category.route");

const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;
app.get("/", (req, res) => {
  res.send("Hello World!");
});





// use  функцийг ашиглан төрөл бүрийн Express-н midlleware-ийг холбодог. 
app.use(logger);
app.use("/api/accounts", accountRouter);
app.use("/api/categories", categoryRouter);





// app.use("/categories", categoryRouter);

// app.get("/accounts", (req, res) => {
//   // return all accounts      Note: энэ функцүүдийг controller гэнэ.
// });
// });
// app.post("/accounts", (req, res) => {
//   // create a new account     Note: энэ функцүүдийг controller гэнэ.
// });

// app.get("/categories", (req, res) => {
//   // return all categories    Note: энэ функцүүдийг controller гэнэ.
// });
// });

// app.post("/categories", (req, res) => {
//   // create a new category    Note: энэ функцүүдийг controller гэнэ.
// });
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
