import { Project } from "@/lib/projects-data";

interface ProjectCardProps {
  project: Project;
  onView: () => void;
}

export default function ProjectCard({ project, onView }: ProjectCardProps) {
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
  
  return (
    <div className="transition duration-300 transform hover:-translate-y-1 backdrop-blur-md bg-zinc-900/25 rounded-lg overflow-hidden border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]">
      <div className="relative h-60">
        <img 
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-900/90"></div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.categories.map((category, index) => (
            <span key={index} className={`px-2 py-1 ${getCategoryColor(category)} text-xs font-cyber rounded-full`}>
              {getCategoryLabel(category)}
            </span>
          ))}
          {project.tech.slice(0, 1).map((tech, index) => (
            <span key={`tech-${index}`} className="px-2 py-1 bg-zinc-700/80 text-white text-xs font-cyber rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-cyber font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>
        <button 
          onClick={onView} 
          className={`${getButtonColor(primaryCategory)} font-cyber text-sm hover:text-white transition flex items-center`}
        >
          View Details 
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
