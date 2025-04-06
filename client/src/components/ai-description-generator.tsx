import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Loader2, AlertCircle, Sparkles, Save, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

// Create a custom API request function for our component
const apiRequest = async (url: string, options: RequestInit): Promise<any> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status}: ${text || response.statusText}`);
  }

  return await response.json();
};

const techOptions = [
  "React", "TypeScript", "Python", "Node.js", "Express", "MongoDB", 
  "Three.js", "PostgreSQL", "Next.js", "Vue.js", "Angular", "Django",
  "Flask", "TensorFlow", "PyTorch", "Scikit-learn", "Docker", "AWS",
  "Firebase", "GraphQL", "REST API", "WebSockets", "Redux", "Tailwind CSS"
];

const featureOptions = [
  "Authentication", "Real-time updates", "3D visualization", "Data analytics",
  "Chat functionality", "File uploads", "Payment processing", "Social sharing",
  "User profiles", "Admin dashboard", "Mobile responsiveness", "Dark mode",
  "Notifications", "Search functionality", "Animations", "Recommendation system"
];

interface AIDescriptionGeneratorProps {
  onDescriptionGenerated?: (description: {
    shortDescription: string;
    description: string;
  }) => void;
  className?: string;
}

export default function AIDescriptionGenerator({
  onDescriptionGenerated,
  className = "",
}: AIDescriptionGeneratorProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [projectType, setProjectType] = useState<string>("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [customTech, setCustomTech] = useState("");
  const [customFeature, setCustomFeature] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedDescription, setGeneratedDescription] = useState<{
    shortDescription: string;
    description: string;
  } | null>(null);
  const [descriptionSaved, setDescriptionSaved] = useState(false);

  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const addCustomTech = () => {
    if (customTech.trim() && !selectedTech.includes(customTech.trim())) {
      setSelectedTech([...selectedTech, customTech.trim()]);
      setCustomTech("");
    }
  };

  const addCustomFeature = () => {
    if (customFeature.trim() && !selectedFeatures.includes(customFeature.trim())) {
      setSelectedFeatures([...selectedFeatures, customFeature.trim()]);
      setCustomFeature("");
    }
  };

  const handleCustomTechKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomTech();
    }
  };

  const handleCustomFeatureKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomFeature();
    }
  };

  const generateDescription = async () => {
    // Validate inputs
    if (!title.trim()) {
      setError("Project title is required");
      return;
    }

    if (!projectType) {
      setError("Project type is required");
      return;
    }

    if (selectedTech.length === 0) {
      setError("At least one technology is required");
      return;
    }

    setIsGenerating(true);
    setError(null);
    setDescriptionSaved(false);

    try {
      const result = await apiRequest("/api/generate-description", {
        method: "POST",
        body: JSON.stringify({
          projectTitle: title,
          projectType,
          technologies: selectedTech,
          features: selectedFeatures,
        }),
      });

      const description = result as { shortDescription: string; description: string };
      setGeneratedDescription(description);
      if (onDescriptionGenerated) {
        onDescriptionGenerated(description);
      }

      toast({
        title: "Description generated successfully",
        description: "AI has created a cyberpunk-themed description for your project",
      });
    } catch (err) {
      console.error("Error generating description:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate description. Please try again."
      );
      toast({
        variant: "destructive",
        title: "Generation failed",
        description: "Could not generate project description",
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const saveDescription = async () => {
    if (!generatedDescription) return;
    
    setIsSaving(true);
    setError(null);
    
    try {
      await apiRequest("/api/save-generated-description", {
        method: "POST",
        body: JSON.stringify({
          shortDescription: generatedDescription.shortDescription,
          description: generatedDescription.description,
          projectTitle: title,
          projectType,
          technologies: selectedTech,
          features: selectedFeatures,
        }),
      });
      
      setDescriptionSaved(true);
      
      // Invalidate the query to refresh the saved descriptions list
      queryClient.invalidateQueries({ queryKey: ['/api/generated-descriptions'] });
      
      toast({
        title: "Description saved successfully",
        description: "You can view it in the saved descriptions section",
      });
    } catch (err) {
      console.error("Error saving description:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to save description. Please try again."
      );
      toast({
        variant: "destructive",
        title: "Save failed",
        description: "Could not save the project description",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card className={`overflow-hidden border-zinc-800 bg-zinc-900/50 ${className}`}>
      <CardHeader className="bg-gradient-to-r from-zinc-900 to-zinc-800">
        <CardTitle className="text-xl text-[hsl(174,100%,50%)] font-cyber flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-[hsl(300,100%,60%)]" />
          AI Project Description Generator
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Generate cyberpunk-themed project descriptions powered by AI
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        {error && (
          <Alert variant="destructive" className="bg-red-900/20 border-red-800 mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="project-title">Project Title</Label>
          <Input
            id="project-title"
            placeholder="Enter your project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-800/50 border-zinc-700"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-type">Project Type</Label>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger className="bg-zinc-800/50 border-zinc-700">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="ml">Machine Learning</SelectItem>
              <SelectItem value="data">Data Analysis</SelectItem>
              <SelectItem value="auto">Automation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Technologies</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedTech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-[hsl(174,100%,50%)]/10 hover:bg-[hsl(174,100%,50%)]/20 border-[hsl(174,100%,50%)]/30 text-[hsl(174,100%,45%)]"
              >
                {tech}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 text-zinc-400 hover:text-white hover:bg-transparent"
                  onClick={() => toggleTech(tech)}
                >
                  ×
                </Button>
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
            {techOptions
              .filter(tech => !selectedTech.includes(tech))
              .slice(0, 12)
              .map((tech) => (
                <Button
                  key={tech}
                  variant="outline"
                  size="sm"
                  className="bg-zinc-800/30 border-zinc-700 hover:bg-zinc-700 hover:text-[hsl(174,100%,60%)]"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Button>
              ))}
          </div>
          <div className="flex mt-2">
            <Input
              placeholder="Add custom technology"
              value={customTech}
              onChange={(e) => setCustomTech(e.target.value)}
              onKeyDown={handleCustomTechKeyDown}
              className="bg-zinc-800/50 border-zinc-700"
            />
            <Button
              variant="secondary"
              className="ml-2 bg-zinc-800 hover:bg-zinc-700"
              onClick={addCustomTech}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Features (Optional)</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedFeatures.map((feature) => (
              <Badge
                key={feature}
                variant="outline"
                className="bg-[hsl(300,100%,50%)]/10 hover:bg-[hsl(300,100%,50%)]/20 border-[hsl(300,100%,50%)]/30 text-[hsl(300,100%,70%)]"
              >
                {feature}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 text-zinc-400 hover:text-white hover:bg-transparent"
                  onClick={() => toggleFeature(feature)}
                >
                  ×
                </Button>
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {featureOptions
              .filter(feature => !selectedFeatures.includes(feature))
              .slice(0, 8)
              .map((feature) => (
                <Button
                  key={feature}
                  variant="outline"
                  size="sm"
                  className="bg-zinc-800/30 border-zinc-700 hover:bg-zinc-700 hover:text-[hsl(300,100%,70%)]"
                  onClick={() => toggleFeature(feature)}
                >
                  {feature}
                </Button>
              ))}
          </div>
          <div className="flex mt-2">
            <Input
              placeholder="Add custom feature"
              value={customFeature}
              onChange={(e) => setCustomFeature(e.target.value)}
              onKeyDown={handleCustomFeatureKeyDown}
              className="bg-zinc-800/50 border-zinc-700"
            />
            <Button
              variant="secondary"
              className="ml-2 bg-zinc-800 hover:bg-zinc-700"
              onClick={addCustomFeature}
            >
              Add
            </Button>
          </div>
        </div>

        {generatedDescription && (
          <motion.div
            className="space-y-4 mt-6 p-4 border border-[hsl(174,100%,50%)]/20 bg-[hsl(174,100%,50%)]/5 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <Label className="text-[hsl(174,100%,50%)]">Short Description</Label>
              <div className="text-zinc-300 mt-1">{generatedDescription.shortDescription}</div>
            </div>
            <div>
              <Label className="text-[hsl(174,100%,50%)]">Full Description</Label>
              <div className="text-zinc-300 mt-1 whitespace-pre-line">
                {generatedDescription.description}
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t border-zinc-800 bg-zinc-900/80 py-3">
        <Button
          variant="outline"
          onClick={() => {
            setTitle("");
            setProjectType("");
            setSelectedTech([]);
            setSelectedFeatures([]);
            setGeneratedDescription(null);
            setError(null);
            setDescriptionSaved(false);
          }}
          className="border-zinc-700 hover:bg-zinc-800"
        >
          Reset
        </Button>
        
        <div className="flex gap-2">
          {generatedDescription && (
            <Button
              onClick={saveDescription}
              disabled={isSaving || descriptionSaved}
              className={`bg-gradient-to-r ${
                descriptionSaved 
                  ? "from-emerald-600 to-emerald-700 cursor-not-allowed"
                  : "from-[hsl(300,100%,40%)] to-[hsl(300,100%,30%)] hover:from-[hsl(300,100%,35%)] hover:to-[hsl(300,100%,25%)]"
              } text-white border-none`}
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : descriptionSaved ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Saved
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Description
                </>
              )}
            </Button>
          )}
          
          <Button
            onClick={generateDescription}
            disabled={isGenerating}
            className="bg-gradient-to-r from-[hsl(174,100%,40%)] to-[hsl(174,100%,30%)] hover:from-[hsl(174,100%,35%)] hover:to-[hsl(174,100%,25%)] text-white border-none"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Description
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}