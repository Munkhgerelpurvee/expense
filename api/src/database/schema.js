const { relations } = require("drizzle-orm");
const { integer, pgTable, serial, varchar } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }),
  email: varchar("email", { length: 50 }),
  password: varchar("password", { length: 50 }),
});

const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 50 }),
  content: varchar("content", { length: 256 }),
  userId: integer("userId"),
});

const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  categoryName: varchar("categoryName", { length: 50 }),
  iconName: varchar("iconName", { length: 256 }),
  selectedColor: varchar("selectedColor", { length: 50 }),
  userId: integer("userId"),
});

const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  userId: integer("userId"),
  categoryId: integer("categoryId"),
  amount: integer("amount"),
  date: varchar("date"),
  time: varchar("time"),
  transaction_type: varchar("transaction_type", { length: 50 }),
  payee: varchar("payee", { length: 256 }),
  note: varchar("note", { length: 256 }),
});

const postsRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));

const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [accounts.categoryId],
    references: [categories.id],
  }),
}));

const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  posts: many(posts),
}));

const categoriesRelations = relations(categories, ({ many }) => ({
  accounts: many(accounts),
}));

module.exports = {
  users,
  posts,
  categories,
  accounts,
  postsRelations,
  accountsRelations,
  usersRelations,
  categoriesRelations,
};
