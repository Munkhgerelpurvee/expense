const { db } = require("../database/index.js");
const { records } = require("../database/schema.js");
const { eq } = require("drizzle-orm");

const getAllRecords = async (req, res) => {
    try {
      const recordsData = await db.query.records.findMany({
        where: eq(records.userId, req.user.id),
        with: {
          category: true,
        },
      });
      console.log("re", recordsData);
  
      res.json(recordsData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching records" });
    }
  };
  
  const createRecord = async (req, res) => {
    const { money, time, title, status, date } = req.body;
    // ASK???
    const numberTitle = parseInt(title, 10);
  
    try {
      const [newRecord] = await db
        .insert(records)
        .values({
          userId: req.user.id,
          categoryId: numberTitle,
          date: date,
          amount: money,
          time: time,
          transaction_type: status,
        })
        .returning();
  
      res.json(newRecord);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating record" });
    }
  };
  
  const deleteRecord = async (req, res) => {
    const recordId = req.params.id;
  
    try {
      const removedRecord = await db
        .delete(records)
        .where(eq(records.id, recordId));
      res.json(removedRecord);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting record" });
    }
  };
  module.exports = { getAllRecords, createRecord, deleteRecord };