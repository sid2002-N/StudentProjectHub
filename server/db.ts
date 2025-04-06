import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "@shared/schema";

// Check if we have a database connection string
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

// Create a postgres connection
const client = postgres(process.env.DATABASE_URL);

// Create a drizzle database instance
export const db = drizzle(client, { schema });

// Initialize the database by running migrations
export async function initializeDatabase() {
  try {
    console.log("Pushing schema to database...");
    
    // This will create or update tables as needed
    await migrate(db, { migrationsFolder: "drizzle" });
    
    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Failed to initialize database:", error);
    throw error;
  }
}