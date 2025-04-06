import OpenAI from "openai";

// Initialize the OpenAI client with API key from environment variables
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user

/**
 * Generate a project description based on user inputs
 * @param projectTitle - The title of the project
 * @param projectType - The type of project (web, ml, data, auto)
 * @param technologies - Array of technologies used
 * @param features - Optional array of features to include
 * @returns The generated description object with short and long descriptions
 */
export async function generateProjectDescription(
  projectTitle: string,
  projectType: string,
  technologies: string[],
  features: string[] = []
): Promise<{ shortDescription: string; description: string }> {
  try {
    const techString = technologies.join(", ");
    const featuresString = features.length > 0 ? features.join(", ") : "innovative features";
    
    const projectTypeMap = {
      web: "web development",
      ml: "machine learning",
      data: "data analysis",
      auto: "automation"
    };
    
    const projectTypeDisplay = projectTypeMap[projectType as keyof typeof projectTypeMap] || projectType;

    const prompt = `
    Generate two project descriptions for a ${projectTypeDisplay} project titled "${projectTitle}" 
    that uses technologies: ${techString}. 
    The project includes features such as ${featuresString}.
    
    Format as JSON with these two elements:
    1. "shortDescription": A concise single-sentence overview (max 150 characters) with cyberpunk flair
    2. "description": A detailed professional 3-paragraph description (max 600 chars total)
      - First paragraph: Overview of project purpose and goals
      - Second paragraph: Technical details and implementation highlights
      - Third paragraph: Benefits and outcomes for users

    Use cyberpunk terminology and futuristic language throughout.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    // Extract content from response and provide fallback if null
    const content = response.choices[0].message.content ?? "{}";
    const result = JSON.parse(content);
    
    return {
      shortDescription: result.shortDescription || "Failed to generate short description",
      description: result.description || "Failed to generate detailed description"
    };
  } catch (error) {
    console.error("Error generating project description:", error);
    return {
      shortDescription: "A cutting-edge project utilizing modern technologies",
      description: "Description generation failed. Please try again or enter a manual description."
    };
  }
}