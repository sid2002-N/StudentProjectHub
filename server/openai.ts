import OpenAI from "openai";

// Initialize with Together AI endpoint
const openai = new OpenAI({ 
  baseURL: "https://api.together.xyz/v1",
  apiKey: process.env.TOGETHER_API_KEY || "none", // Together AI requires an API key but offers free credits
  defaultQuery: { model: "mistralai/Mixtral-8x7B-Instruct-v0.1" } // Free model
});

// Demo descriptions for when API calls fail
const demoDescriptions = {
  web: {
    shortDescription: "A neon-drenched web portal slicing through the digital void with bleeding-edge tech and hypersonic user experiences.",
    description: "NeoGrid is a revolutionary web platform designed to bridge the gap between users and digital services in the sprawling cybernetic landscape. The architecture implements a unified gateway for seamless interaction with complex data structures and service endpoints.\n\nBuilt on a stack of cutting-edge technologies including React, TypeScript, and Node.js, the system features real-time data synchronization, neural-adaptive interfaces, and quantum-resistant security protocols. The microservice architecture ensures bulletproof scalability while the custom rendering engine pushes visual boundaries.\n\nUsers experience unprecedented access speeds with 95% reduction in cognitive friction compared to legacy interfaces. The system's predictive algorithms anticipate user needs, creating an almost telepathic user experience while maintaining complete data sovereignty and neural privacy."
  },
  ml: {
    shortDescription: "A neural-enhanced prediction matrix that jacks directly into the datastream, extracting patterns invisible to standard algorithms.",
    description: "SynapticCore represents a paradigm shift in predictive analysis, interfacing with vast data oceans to extract actionable intelligence from seemingly chaotic information flows. This neural framework maps previously undetectable patterns across disparate data territories with unprecedented accuracy.\n\nArchitecturally, the system deploys advanced TensorFlow implementations with proprietary deep learning algorithms that self-optimize through reinforced feedback loops. The neural network topology dynamically reconfigures based on data drift detection, maintaining peak performance even as the underlying data reality shifts.\n\nOrganizations implementing SynapticCore report an average 78% improvement in predictive accuracy across multiple domains. The system's ability to interpret complex multivariate relationships provides organizations with a digital sixth sense, creating a decisive edge in increasingly competitive information markets."
  },
  data: {
    shortDescription: "A high-velocity data crystallization engine that transmutes chaotic information streams into diamond-hard strategic assets.",
    description: "DataFusion functions as a mission-critical nexus point for organizations drowning in the digital deluge, transforming raw information current into structured intelligence networks. The platform creates a unified ontology across previously siloed data territories, enabling true cross-domain insights.\n\nThe technical architecture implements a distributed processing matrix utilizing PostgreSQL, Python analytics engines, and proprietary data visualization frameworks. Edge-node processing reduces latency by 87%, while the adaptive compression algorithms slash storage requirements without sacrificing analytical fidelity.\n\nDecision-makers gain access to a neural dashboard presenting multidimensional data relationships through an intuitive cyberspace interface. This radical transparency translates directly to operational advantages: 63% faster decision cycles, 42% reduction in strategic blindspots, and 88% improvement in predictive reliability across business functions."
  },
  auto: {
    shortDescription: "A ghost-in-the-machine automation neural net that infiltrates workflow inefficiencies and rewires them into streamlined digital processes.",
    description: "NeuralFlow represents the bleeding edge of business process automation, deploying synthetic intelligence to identify and eliminate friction points within complex organizational systems. The platform continuously scans operational patterns, automatically generating optimization pathways without human intervention.\n\nTechnically, the system utilizes a hybrid architecture combining traditional rule-based automation with adaptive neural networks that evolve through operational exposure. The containerized microservice deployment enables seamless integration with existing technology stacks while allowing progressive enhancement of automated capabilities.\n\nOrganizations implementing NeuralFlow experience an average 73% reduction in process execution time, 91% decrease in human error rates, and 58% improvement in resource utilization. The system's ability to continuously self-optimize creates an exponential efficiency curve, with performance gains accelerating over time as the neural architecture matures."
  }
};

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
    // If we're in demo mode or for testing, return canned responses instead of calling API
    const isDemoMode = process.env.DEMO_MODE === "true";
    
    if (isDemoMode) {
      console.log("Using demo descriptions instead of calling OpenAI API");
      const demoType = projectType as keyof typeof demoDescriptions;
      return demoDescriptions[demoType] || demoDescriptions.web;
    }
    
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
    
    // Return a pre-made description based on project type for better user experience
    const fallbackType = projectType as keyof typeof demoDescriptions;
    if (demoDescriptions[fallbackType]) {
      return demoDescriptions[fallbackType];
    }
    
    // Generic fallback if project type doesn't match
    return {
      shortDescription: `A cutting-edge ${projectType} project utilizing ${technologies.slice(0, 3).join(", ")}`,
      description: `This advanced ${projectType} solution leverages modern technologies including ${technologies.join(", ")}.\n\nThe architecture implements a sophisticated framework for handling complex operations while maintaining high performance and security standards.\n\nUsers benefit from a streamlined experience with intuitive interfaces and powerful functionality, resulting in significant improvements in efficiency and productivity.`
    };
  }
}