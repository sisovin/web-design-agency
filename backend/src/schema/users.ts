import { pgTable, serial, text, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  firstName: varchar('first_name', { length: 50 }).notNull(), // New field
  lastName: varchar('last_name', { length: 50 }).notNull(), // New field
  phoneNumber: varchar('phone_number', { length: 20 }), // New field
  address: text('address'), // New field
  dateOfBirth: timestamp('date_of_birth'), // New field
  profilePicture: text('profile_picture'), // New field
  status: varchar('status', { length: 20 }).default('active').notNull(), // New field
});
