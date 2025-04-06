import { useState } from "react";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { projects } from "@/lib/projects-data";

type FilterType = 'all' | 'ml' | 'web' | 'data' | 'auto';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
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

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mb-10 flex flex-wrap justify-center gap-3">
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              onView={() => openProjectModal(project.id)}
            />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="relative px-8 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded">
            Load More Projects
          </button>
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
