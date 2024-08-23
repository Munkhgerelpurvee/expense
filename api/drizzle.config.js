const { defineConfig } = require("drizzle-kit");
// import-iig odoo zaaval require hiij oruulj irne. uchir ni odoo ES6-standartiig manai tusul demjihgui bgaa gesen ug yum. Tiimees tiinees umnuh importiin bichlegeer oruulj irne.

// import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schema.js",
  dialect: "postgresql",
  out: "./drizzle",
  verbose: true,
});
