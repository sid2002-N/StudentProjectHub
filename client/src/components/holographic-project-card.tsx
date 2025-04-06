import { useState } from "react";
import { Project } from "@/lib/projects-data";
import { motion } from "framer-motion";

interface HolographicProjectCardProps {
  project: Project;
  onView: () => void;
}

export default function HolographicProjectCard({ project, onView }: HolographicProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'ml':
        return 'bg-[hsl(174,100%,50%)]/20 text-[hsl(174,100%,50%)]';
      case 'web':
        return 'bg-[hsl(300,100%,50%)]/20 text-[hsl(300,100%,50%)]';
      case 'data':
        return 'bg-[hsl(60,100%,50%)]/20 text-[hsl(60,100%,50%)]';
      case 'auto':
        return 'bg-[hsl(174,100%,50%)]/20 text-[hsl(174,100%,50%)]';
      default:
        return 'bg-zinc-700/80 text-white';
    }
  };
  
  const getButtonColor = (category: string) => {
    switch(category) {
      case 'ml':
        return 'text-[hsl(174,100%,50%)]';
      case 'web':
        return 'text-[hsl(300,100%,50%)]';
      case 'data':
        return 'text-[hsl(60,100%,50%)]';
      case 'auto':
        return 'text-[hsl(174,100%,50%)]';
      default:
        return 'text-[hsl(174,100%,50%)]';
    }
  };
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'ml':
        return 'ML';
      case 'web':
        return 'Web';
      case 'data':
        return 'Data';
      case 'auto':
        return 'Automation';
      default:
        return category;
    }
  };
  
  const primaryCategory = project.categories[0];
  const borderColor = primaryCategory === 'web' ? 
    'border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5)]' : 
    'border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5)]';
  
  return (
    <motion.div
      className={`cursor-pointer backdrop-blur-md bg-zinc-900/25 rounded-lg overflow-hidden border ${borderColor} relative group`}
      whileHover={{ 
        scale: 1.03,
        boxShadow: primaryCategory === 'web' ? 
          "0 0 15px rgba(255,0,255,0.7)" : 
          "0 0 15px rgba(12,255,225,0.7)"
      }}
      onClick={onView}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Holographic overlay effects */}
      <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-hologram-scan"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      
      {/* Top light bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Bottom light bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative h-60">
        <img 
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90"></div>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.categories.map((category, index) => (
            <motion.span 
              key={index} 
              className={`px-2 py-1 ${getCategoryColor(category)} text-xs font-cyber rounded-full`}
              whileHover={{ scale: 1.1 }}
            >
              {getCategoryLabel(category)}
            </motion.span>
          ))}
          
          {project.tech.slice(0, 1).map((tech, index) => (
            <motion.span 
              key={`tech-${index}`} 
              className="px-2 py-1 bg-zinc-700/80 text-white text-xs font-cyber rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-cyber font-semibold mb-2 text-white relative 
          group-hover:text-shadow-cyan transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>
        
        <motion.div 
          className={`${getButtonColor(primaryCategory)} font-cyber text-sm flex items-center`}
          whileHover={{ x: 5 }}
        >
          View Details 
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}