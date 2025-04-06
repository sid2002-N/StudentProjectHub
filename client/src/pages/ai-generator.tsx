import React from "react";
import AIDescriptionGenerator from "@/components/ai-description-generator";
import CyberBackground from "@/components/three/CyberBackground";
import { motion } from "framer-motion";
import { Sparkles, Bot, Cpu, Code, Network } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AIGenerator() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen bg-zinc-950">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <CyberBackground className="w-full h-full" />
      </div>
      
      <div className="container relative z-10 py-16 px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-cyber text-white mb-4 drop-shadow-[0_0_10px_rgba(12,255,225,0.5)]">
            <Sparkles className="inline-block mr-2 mb-1 text-[hsl(300,100%,70%)]" />
            AI Project Generator
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Harness the power of artificial intelligence to create captivating project descriptions 
            with a cyberpunk flair. Perfect for showcasing your technical skills and creative ideas.
          </p>
        </motion.div>
        
        {/* Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <Bot className="w-10 h-10 text-[hsl(174,100%,50%)] mb-4" />
            <h3 className="font-cyber text-xl text-white mb-2">AI-Powered</h3>
            <p className="text-zinc-400">Utilizes advanced language models to craft compelling descriptions that capture your project's essence.</p>
          </div>
          
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <Cpu className="w-10 h-10 text-[hsl(300,100%,70%)] mb-4" />
            <h3 className="font-cyber text-xl text-white mb-2">Tech-Focused</h3>
            <p className="text-zinc-400">Specifically designed for technical projects with appropriate terminology and technical details.</p>
          </div>
          
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <Code className="w-10 h-10 text-[hsl(174,100%,50%)] mb-4" />
            <h3 className="font-cyber text-xl text-white mb-2">Cyberpunk Style</h3>
            <p className="text-zinc-400">Infuses your project descriptions with futuristic cyberpunk terminology and aesthetic.</p>
          </div>
        </motion.div>
        
        {/* Generator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <AIDescriptionGenerator className="shadow-lg shadow-[hsl(174,100%,50%)]/5" />
        </motion.div>
        
        {/* Info Section */}
        <motion.div 
          className="mt-16 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <Network className="w-10 h-10 text-[hsl(300,100%,70%)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-cyber text-xl text-white mb-2">How It Works</h3>
              <ol className="text-zinc-400 space-y-2 list-decimal pl-4">
                <li>Enter your project title and select the appropriate project type</li>
                <li>Choose the technologies your project utilizes</li>
                <li>Optionally add key features to highlight</li>
                <li>Click "Generate Description" and let AI create your project description</li>
                <li>Use the generated descriptions for your portfolio, proposals, or project documentation</li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}