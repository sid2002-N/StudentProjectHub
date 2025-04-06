import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateProjectDescription } from "./openai";
import { insertGeneratedDescriptionSchema, type GeneratedDescription } from "@shared/schema";

// Enable demo mode by default to ensure functionality even when API isn't working
process.env.DEMO_MODE = "true";

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
      
      // Generate description using OpenAI or fallback to demo descriptions
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
  
  // API endpoint to toggle demo mode (for future use when API key is valid)
  app.post("/api/toggle-demo-mode", (req: Request, res: Response) => {
    const { enabled } = req.body;
    
    if (typeof enabled !== 'boolean') {
      return res.status(400).json({ error: "Invalid parameter - enabled must be a boolean" });
    }
    
    process.env.DEMO_MODE = enabled ? "true" : "false";
    
    return res.json({ 
      success: true, 
      demoMode: enabled,
      message: enabled 
        ? "Demo mode enabled - using pre-built descriptions" 
        : "Demo mode disabled - using OpenAI API"
    });
  });
  
  // API endpoint to save a generated description to the database
  app.post("/api/save-generated-description", async (req: Request, res: Response) => {
    try {
      const { 
        shortDescription, 
        description, 
        projectTitle, 
        projectType, 
        technologies, 
        features,
        userId 
      } = req.body;
      
      // Validate required inputs
      if (!shortDescription || !description || !projectTitle || !projectType || !technologies) {
        return res.status(400).json({ 
          error: "Missing required fields for saving a generated description" 
        });
      }
      
      // Save the generated description to the database
      const savedDescription = await storage.createGeneratedDescription({
        shortDescription,
        description,
        projectTitle,
        projectType,
        technologies,
        features: features || [],
        userId: userId || null,
        saved: true
      });
      
      return res.json({ 
        success: true, 
        description: savedDescription,
        message: "Generated description saved successfully" 
      });
    } catch (error) {
      console.error("Error saving generated description:", error);
      return res.status(500).json({ 
        error: "Failed to save description",
        message: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });
  
  // API endpoint to get saved generated descriptions (optionally by user)
  app.get("/api/generated-descriptions", async (req: Request, res: Response) => {
    try {
      const userId = req.query.userId ? parseInt(req.query.userId as string) : undefined;
      
      let descriptions: GeneratedDescription[] = [];
      if (userId) {
        descriptions = await storage.getUserGeneratedDescriptions(userId);
      }
      
      return res.json(descriptions);
    } catch (error) {
      console.error("Error retrieving generated descriptions:", error);
      return res.status(500).json({ 
        error: "Failed to retrieve descriptions",
        message: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
