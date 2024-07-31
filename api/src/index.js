const express = require("express");
var cors = require("cors");
const { accountRouter } = require("./routes/account.route");

const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/accounts", accountRouter);

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
