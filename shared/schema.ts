import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// User model
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Project model to store project descriptions
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  projectType: text("project_type").notNull(), // web, ml, data, auto
  technologies: text("technologies").array().notNull(),
  features: text("features").array(),
  categories: text("categories").array(),
  imageUrl: text("image_url"),
  userId: integer("user_id").references(() => users.id),
  contactName: text("contact_name"),
  contactEmail: text("contact_email"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Generated AI descriptions model
export const generatedDescriptions = pgTable("generated_descriptions", {
  id: serial("id").primaryKey(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  projectTitle: text("project_title").notNull(),
  projectType: text("project_type").notNull(),
  technologies: text("technologies").array().notNull(),
  features: text("features").array(),
  userId: integer("user_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  saved: boolean("saved").default(false),
});

// Relations
export const projectsRelations = relations(projects, ({ one }) => ({
  user: one(users, {
    fields: [projects.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
  generatedDescriptions: many(generatedDescriptions),
}));

export const generatedDescriptionsRelations = relations(generatedDescriptions, ({ one }) => ({
  user: one(users, {
    fields: [generatedDescriptions.userId],
    references: [users.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertGeneratedDescriptionSchema = createInsertSchema(generatedDescriptions).omit({
  id: true,
  createdAt: true,
});

// TypeScript types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertGeneratedDescription = z.infer<typeof insertGeneratedDescriptionSchema>;
export type GeneratedDescription = typeof generatedDescriptions.$inferSelect;
