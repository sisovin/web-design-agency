import { pgTable, serial, text, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  clientId: integer('client_id').notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  status: varchar('status', { length: 50 }).notNull(),
  budget: integer('budget').notNull(), // New field
  projectManager: varchar('project_manager', { length: 100 }).notNull(), // New field
  teamMembers: text('team_members'), // New field
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
