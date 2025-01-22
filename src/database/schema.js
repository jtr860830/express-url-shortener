import { pgTable, varchar, index } from "drizzle-orm/pg-core";

export const urls = pgTable("urls", {
  short: varchar(10).primaryKey(),
  origin: varchar(255).notNull(),
}, (table) => {
  return {
    originIdx: index("origin_idx").on(table.origin),
  }
});
