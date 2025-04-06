import { useEffect } from "react";
import { Project } from "@/lib/projects-data";
import { Link } from "wouter";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    // Disable scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Enable escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    // Cleanup
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);
  
  // Handle clicking outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 transition-opacity bg-zinc-900 bg-opacity-75" aria-hidden="true"></div>
      
      <div className="relative inline-block w-full max-w-4xl backdrop-blur-md bg-zinc-900/95 rounded-lg overflow-hidden shadow-xl transform transition-all">
        <div className="absolute top-4 right-4 z-50">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-cyber font-semibold text-white mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-cyber font-bold text-[hsl(174,100%,50%)] mb-4">{project.title}</h2>
              <div className="mb-2">
                {project.categories.map((category, index) => {
                  let color;
                  let label;
                  
                  switch(category) {
                    case 'ml':
                      color = 'bg-[hsl(174,100%,50%)]/20 text-[hsl(174,100%,50%)]';
                      label = 'ML';
                      break;
                    case 'web':
                      color = 'bg-[hsl(300,100%,50%)]/20 text-[hsl(300,100%,50%)]';
                      label = 'Web';
                      break;
                    case 'data':
                      color = 'bg-[hsl(60,100%,50%)]/20 text-[hsl(60,100%,50%)]';
                      label = 'Data';
                      break;
                    case 'auto':
                      color = 'bg-[hsl(174,100%,50%)]/20 text-[hsl(174,100%,50%)]';
                      label = 'Automation';
                      break;
                    default:
                      color = 'bg-zinc-700/80 text-white';
                      label = category;
                  }
                  
                  return (
                    <span 
                      key={index} 
                      className={`px-3 py-1 ${color} text-sm font-cyber rounded-full mr-2`}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="mb-6">
                <h3 className="text-xl font-cyber font-semibold text-white mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[hsl(174,100%,50%)] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <a className="relative inline-block px-6 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded">
                  Request Similar Project
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
