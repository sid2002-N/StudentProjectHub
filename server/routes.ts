import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateProjectDescription } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // AI Project Description Generator API
  app.post("/api/generate-description", async (req: Request, res: Response) => {
    try {
      const { projectTitle, projectType, technologies, features } = req.body;
      
      // Validate required inputs
      if (!projectTitle || !projectType || !technologies) {
        return res.status(400).json({ 
          error: "Missing required fields: projectTitle, projectType, and technologies are required" 
        });
      }
      
      // Generate description using OpenAI
      const description = await generateProjectDescription(
        projectTitle,
        projectType,
        technologies,
        features || []
      );
      
      return res.json(description);
    } catch (error) {
      console.error("Error in generate-description endpoint:", error);
      return res.status(500).json({ 
        error: "Failed to generate description",
        message: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
