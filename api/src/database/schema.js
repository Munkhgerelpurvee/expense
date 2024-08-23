const { relations } = require("drizzle-orm");
const { integer, pgTable, serial, varchar } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  content: varchar("content", { length: 256 }),
  userId: integer("userId"),
});

const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  categoryName: varchar("categoryName", { length: 256 }),
  iconName: varchar("iconName", { length: 256 }),
  selectedColor: varchar("selectedColor", { length: 256 }),
});
const records = pgTable("records", {
  id: serial("id").primaryKey(),
  userId: integer("userId"),
  categoryId: integer("categoryId"),
  amount: integer("amount"),
  date: varchar("date"),
  time: varchar("time"),
  transaction_type: varchar("transaction_type", { length: 256 }),
  payee: varchar("payee", { length: 256 }),
  note: varchar("note", { length: 256 }),
});

const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

const postsRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));

const recordsRelations = relations(records, ({ one }) => ({
  user: one(users, {
    fields: [records.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [records.categoryId],
    references: [categories.id],
  }),
}));

module.exports = {
  users,
  posts,
  categories,
  usersRelations,
  postsRelations,
  records,
  recordsRelations,
};
