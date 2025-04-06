import { 
  users, 
  projects, 
  generatedDescriptions,
  type User, 
  type InsertUser,
  type Project,
  type InsertProject,
  type GeneratedDescription,
  type InsertGeneratedDescription
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

// The storage interface defines all the data access methods
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project operations
  getProject(id: number): Promise<Project | undefined>;
  getProjects(limit?: number): Promise<Project[]>;
  getProjectsByCategory(category: string, limit?: number): Promise<Project[]>;
  getProjectsByType(type: string, limit?: number): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Generated descriptions operations
  getGeneratedDescription(id: number): Promise<GeneratedDescription | undefined>;
  getUserGeneratedDescriptions(userId: number): Promise<GeneratedDescription[]>;
  createGeneratedDescription(description: InsertGeneratedDescription): Promise<GeneratedDescription>;
  saveGeneratedDescription(id: number, save: boolean): Promise<GeneratedDescription | undefined>;
  deleteGeneratedDescription(id: number): Promise<boolean>;
}

// Database implementation of the storage interface
export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Project operations
  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }
  
  async getProjects(limit: number = 50): Promise<Project[]> {
    return await db.select().from(projects).orderBy(desc(projects.createdAt)).limit(limit);
  }
  
  async getProjectsByCategory(category: string, limit: number = 50): Promise<Project[]> {
    // This is a simplification - in SQL you'd need a more sophisticated query 
    // to check if category is in the categories array
    const projectsList = await db.select().from(projects).limit(limit);
    return projectsList.filter(project => 
      project.categories && project.categories.includes(category)
    );
  }
  
  async getProjectsByType(type: string, limit: number = 50): Promise<Project[]> {
    return await db.select()
      .from(projects)
      .where(eq(projects.projectType, type))
      .orderBy(desc(projects.createdAt))
      .limit(limit);
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }
  
  async updateProject(id: number, projectUpdate: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db
      .update(projects)
      .set({
        ...projectUpdate,
        updatedAt: new Date()
      })
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    const result = await db.delete(projects).where(eq(projects.id, id)).returning({ id: projects.id });
    return result.length > 0;
  }
  
  // Generated descriptions operations
  async getGeneratedDescription(id: number): Promise<GeneratedDescription | undefined> {
    const [description] = await db
      .select()
      .from(generatedDescriptions)
      .where(eq(generatedDescriptions.id, id));
    return description;
  }
  
  async getUserGeneratedDescriptions(userId: number): Promise<GeneratedDescription[]> {
    return await db
      .select()
      .from(generatedDescriptions)
      .where(eq(generatedDescriptions.userId, userId))
      .orderBy(desc(generatedDescriptions.createdAt));
  }
  
  async createGeneratedDescription(description: InsertGeneratedDescription): Promise<GeneratedDescription> {
    const [newDescription] = await db
      .insert(generatedDescriptions)
      .values(description)
      .returning();
    return newDescription;
  }
  
  async saveGeneratedDescription(id: number, save: boolean): Promise<GeneratedDescription | undefined> {
    const [updated] = await db
      .update(generatedDescriptions)
      .set({ saved: save })
      .where(eq(generatedDescriptions.id, id))
      .returning();
    return updated;
  }
  
  async deleteGeneratedDescription(id: number): Promise<boolean> {
    const result = await db
      .delete(generatedDescriptions)
      .where(eq(generatedDescriptions.id, id))
      .returning({ id: generatedDescriptions.id });
    return result.length > 0;
  }
}

// Export an instance of the database storage
export const storage = new DatabaseStorage();
