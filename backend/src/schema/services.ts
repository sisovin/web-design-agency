import { pgTable, serial, text, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  price: integer('price').notNull(),
  duration: integer('duration').notNull(), // New field
  category: varchar('category', { length: 100 }).notNull(), // New field
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
