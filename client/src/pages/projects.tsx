import { useState, useEffect } from "react";
import ProjectCard from "@/components/project-card";
import HolographicProjectCard from "@/components/holographic-project-card";
import ProjectModal from "@/components/project-modal";
import { projects } from "@/lib/projects-data";
import CyberBackground from "@/components/three/CyberBackground";
import { motion, AnimatePresence } from "framer-motion";

type FilterType = 'all' | 'ml' | 'web' | 'data' | 'auto';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [useHolographic, setUseHolographic] = useState(true);
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));
  
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };
  
  const openProjectModal = (id: number) => {
    setSelectedProject(id);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };
  
  const toggleCardStyle = () => {
    setUseHolographic(prev => !prev);
  };

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      <CyberBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cyber font-bold mb-4">
            <span className="text-white">Recent </span>
            <span className="text-[hsl(174,100%,50%)]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through my portfolio of custom student projects. Each one demonstrates technical expertise and attention to detail.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <button 
            className={`px-4 py-2 rounded font-cyber border transition ${
              activeFilter === 'all' 
                ? 'text-[hsl(174,100%,50%)] border-[hsl(174,100%,50%)]/50 bg-[hsl(174,100%,50%)]/10' 
                : 'text-white border-transparent hover:border-[hsl(174,100%,50%)]/50 hover:text-[hsl(174,100%,50%)]'
            }`}
            onClick={() => handleFilterClick('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded font-cyber border transition ${
              activeFilter === 'ml' 
                ? 'text-[hsl(174,100%,50%)] border-[hsl(174,100%,50%)]/50 bg-[hsl(174,100%,50%)]/10' 
                : 'text-white border-transparent hover:border-[hsl(174,100%,50%)]/50 hover:text-[hsl(174,100%,50%)]'
            }`}
            onClick={() => handleFilterClick('ml')}
          >
            Machine Learning
          </button>
          <button 
            className={`px-4 py-2 rounded font-cyber border transition ${
              activeFilter === 'web' 
                ? 'text-[hsl(174,100%,50%)] border-[hsl(174,100%,50%)]/50 bg-[hsl(174,100%,50%)]/10' 
                : 'text-white border-transparent hover:border-[hsl(174,100%,50%)]/50 hover:text-[hsl(174,100%,50%)]'
            }`}
            onClick={() => handleFilterClick('web')}
          >
            Web Development
          </button>
          <button 
            className={`px-4 py-2 rounded font-cyber border transition ${
              activeFilter === 'data' 
                ? 'text-[hsl(174,100%,50%)] border-[hsl(174,100%,50%)]/50 bg-[hsl(174,100%,50%)]/10' 
                : 'text-white border-transparent hover:border-[hsl(174,100%,50%)]/50 hover:text-[hsl(174,100%,50%)]'
            }`}
            onClick={() => handleFilterClick('data')}
          >
            Data Science
          </button>
          <button 
            className={`px-4 py-2 rounded font-cyber border transition ${
              activeFilter === 'auto' 
                ? 'text-[hsl(174,100%,50%)] border-[hsl(174,100%,50%)]/50 bg-[hsl(174,100%,50%)]/10' 
                : 'text-white border-transparent hover:border-[hsl(174,100%,50%)]/50 hover:text-[hsl(174,100%,50%)]'
            }`}
            onClick={() => handleFilterClick('auto')}
          >
            Automation
          </button>
        </div>
        
        {/* Display Style Toggle */}
        <div className="flex justify-center mb-8">
          <motion.button 
            onClick={toggleCardStyle}
            className="group relative px-6 py-2 overflow-hidden rounded-full font-cyber text-sm text-white bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 border border-[hsl(174,100%,50%)]/30"
            whileTap={{ scale: 0.95 }}
            whileHover={{ 
              boxShadow: "0 0 8px rgba(12,255,225,0.7)",
              borderColor: "rgba(12,255,225,0.7)" 
            }}
            initial={false}
            animate={useHolographic ? 
              { boxShadow: ["0 0 0px rgba(12,255,225,0.1)", "0 0 8px rgba(12,255,225,0.5)", "0 0 0px rgba(12,255,225,0.1)"] } : 
              { boxShadow: "0 0 0px rgba(12,255,225,0)" }
            }
            transition={{ duration: 2, repeat: useHolographic ? Infinity : 0 }}
          >
            {/* Glowing background effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[hsl(174,100%,50%)]/10 via-transparent to-[hsl(300,100%,50%)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Animated indicator */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-[hsl(174,100%,50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
            
            <div className="relative flex items-center gap-2">
              <motion.span 
                className={`w-3 h-3 rounded-full ${useHolographic ? "bg-[hsl(174,100%,50%)]" : "bg-white/30"} transition-colors duration-300`}
                animate={useHolographic ? 
                  { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] } : 
                  { scale: 1, opacity: 0.5 }
                }
                transition={{ duration: 1.5, repeat: useHolographic ? Infinity : 0 }}
              />
              {useHolographic ? "Standard View" : "Holographic View"}
            </div>
          </motion.button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {useHolographic ? (
              <motion.div
                key="holographic"
                className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map(project => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: project.id * 0.05,
                      ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for a more bouncy effect
                    }}
                  >
                    <HolographicProjectCard 
                      project={project}
                      onView={() => openProjectModal(project.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="standard"
                className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map(project => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: project.id * 0.05,
                      ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for a more bouncy effect 
                    }}
                  >
                    <ProjectCard 
                      project={project}
                      onView={() => openProjectModal(project.id)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <motion.button 
            className="relative px-8 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded overflow-hidden group"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 15px rgba(12,255,225,0.7)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[hsl(174,100%,50%)]/0 via-[hsl(174,100%,50%)]/30 to-[hsl(174,100%,50%)]/0 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "linear" 
              }}
            />
            <span className="relative z-10 flex items-center">
              Load More Projects
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  repeatDelay: 0.5 
                }}
              >
                <path d="M9 18l6-6-6-6"/>
              </motion.svg>
            </span>
          </motion.button>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)!}
          onClose={closeProjectModal}
        />
      )}
    </section>
  );
}
