const { db } = require("../database/index.js");
const { accounts } = require("../database/schema.js");
const { eq } = require("drizzle-orm");

const getAllAccounts = async (req, res) => {
  try {
    const accountsData = await db.query.accounts.findMany({
      where: eq(accounts.userId, req.user.id),
      with: {
        category: true,
      },
    });
    console.log(
      "res--BACKEND--accountDrizzleController--backEnd",
      accountsData
    );

    res.json(accountsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching records" });
  }
};

const createAccount = async (req, res) => {
  // const { newAccount } = req.body;
  const {
    amount,
    categoryId,
    userId,
    payee,
    note,
    date,
    time,
    transaction_type,
  } = req.body;
  // const {
  //   userId,
  //   categoryId,
  //   amount,
  //   date,
  //   time,
  //   transaction_type,
  //   payee,
  //   note,
  // } = newAccount;
  console.log(categoryId);

  try {
    const [newAccount] = await db
      .insert(accounts)
      .values({
        userId: req.user.id,
        categoryId,
        date,
        amount,
        time,
        transaction_type,
        payee,
        note,
      })
      .returning();

    res.json(newAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating record" });
  }
};

const deleteAccount = async (req, res) => {
  const accountId = req.params.id;

  try {
    const removedAccount = await db
      .delete(accounts)
      .where(eq(accounts.id, accountId));
    res.json(removedAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting record" });
  }
};
module.exports = { getAllAccounts, createAccount, deleteAccount };
