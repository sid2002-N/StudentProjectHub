import { useState, useRef, useEffect } from "react";
import { Project } from "@/lib/projects-data";
import { motion } from "framer-motion";

interface HolographicProjectCardProps {
  project: Project;
  onView: () => void;
}

export default function HolographicProjectCard({ project, onView }: HolographicProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate rotation based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 10 degrees)
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };
  
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
    'border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)]' : 
    'border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]';
  
  // Add holographic scanline effect
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const scanline = document.createElement('div');
    scanline.className = 'absolute inset-0 pointer-events-none holographic-scanline opacity-0';
    scanline.style.background = 'linear-gradient(to bottom, transparent, rgba(127, 255, 255, 0.1), transparent)';
    scanline.style.height = '10px';
    
    card.appendChild(scanline);
    
    let position = 0;
    let animationId: number;
    
    const animateScanline = () => {
      position = (position + 1) % card.offsetHeight;
      scanline.style.transform = `translateY(${position}px)`;
      animationId = requestAnimationFrame(animateScanline);
    };
    
    if (isHovered) {
      scanline.style.opacity = '1';
      animationId = requestAnimationFrame(animateScanline);
    }
    
    return () => {
      cancelAnimationFrame(animationId);
      if (card.contains(scanline)) {
        card.removeChild(scanline);
      }
    };
  }, [isHovered]);
  
  return (
    <motion.div
      ref={cardRef}
      className={`cursor-pointer backdrop-blur-md bg-zinc-900/25 rounded-lg overflow-hidden border ${borderColor} relative`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? "none" : "transform 0.5s ease-out"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetRotation();
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.03 }}
      onClick={onView}
    >
      {/* Holographic overlay effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(174,100%,50%)]/10 to-transparent opacity-0 ${isHovered ? 'animate-hologram-pulse opacity-30' : ''} pointer-events-none`}></div>
      
      <div className="relative h-60">
        <img 
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        
        {/* Image overlay with glitch effect */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90 ${isHovered ? 'after:content-[""] after:absolute after:inset-0 after:bg-[hsl(174,100%,50%)]/10 after:opacity-0 after:animate-glitch' : ''}`}></div>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.categories.map((category, index) => (
            <motion.span 
              key={index} 
              className={`px-2 py-1 ${getCategoryColor(category)} text-xs font-cyber rounded-full`}
              animate={isHovered ? { y: [0, -5, 0], opacity: [1, 0.8, 1] } : {}}
              transition={{ duration: 1, delay: index * 0.1, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
            >
              {getCategoryLabel(category)}
            </motion.span>
          ))}
          
          {project.tech.slice(0, 1).map((tech, index) => (
            <motion.span 
              key={`tech-${index}`} 
              className="px-2 py-1 bg-zinc-700/80 text-white text-xs font-cyber rounded-full"
              animate={isHovered ? { y: [0, -5, 0], opacity: [1, 0.8, 1] } : {}}
              transition={{ duration: 1, delay: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      
      <div className="p-6 relative">
        {/* Holographic text effect */}
        <motion.h3 
          className="text-xl font-cyber font-semibold mb-2 text-white relative"
          animate={isHovered ? { textShadow: ["0 0 5px rgba(12,255,225,0.5)", "0 0 10px rgba(12,255,225,0.7)", "0 0 5px rgba(12,255,225,0.5)"] } : {}}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>
        
        <motion.div 
          className={`${getButtonColor(primaryCategory)} font-cyber text-sm flex items-center`}
          animate={isHovered ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
        >
          View Details 
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}