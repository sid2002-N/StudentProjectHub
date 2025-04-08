import { Link } from "wouter";
import StatsCard from "@/components/stats-card";
import { Code, FileCode, Database, Brain, MonitorSmartphone } from "lucide-react";
import CyberBackground from "@/components/three/CyberBackground";
import CyberCanvas from "@/components/three/CyberCanvas";
import CyberpunkComputer from "@/components/cyberpunk-computer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pb-32 md:pt-36 relative overflow-hidden">
        <CyberBackground />
        {/* Keep the existing background blobs as fallback/additional effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(174,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(300,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold leading-tight mb-4">
                <span className="text-white">Get Custom </span>
                <span className="text-[hsl(174,100%,50%)] animate-pulse">College Projects</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-cyber text-[hsl(300,100%,50%)] mb-6">
                Mini Projects • Full Stack • Data Science • AI
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Expert development services for students requiring high-quality, custom tech projects. From mini assignments and bug fixes to complex ML models and responsive web applications, I deliver professional solutions to help you excel.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/projects">
                  <div className="relative px-6 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded">
                    View Projects
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="relative px-6 py-3 bg-zinc-800 text-[hsl(300,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)] rounded">
                    Get Your Project Done
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] aspect-[4/3] md:h-[400px]">
              <div className="w-full h-full" style={{ minHeight: '300px' }}>
                <CyberCanvas className="w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/70 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <span className="px-3 py-1 bg-[hsl(174,100%,50%)]/20 text-[hsl(174,100%,50%)] text-sm font-cyber rounded-full">Professional Quality</span>
                <span className="ml-2 px-3 py-1 bg-[hsl(300,100%,50%)]/20 text-[hsl(300,100%,50%)] text-sm font-cyber rounded-full">Fast Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatsCard value="50+" label="Projects Completed" color="cyan" />
            <StatsCard value="100%" label="Satisfaction Rate" color="pink" />
            <StatsCard value="10+" label="Technologies" color="yellow" />
            <StatsCard value="24h" label="Response Time" color="cyan" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-cyber font-bold text-white mb-8 text-center">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg border border-white/5 hover:border-cyan-500/40 transition duration-300 group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition duration-300">
                <span className="text-cyan-500 text-2xl">
                  <FileCode className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-cyber font-bold text-white mb-4">Mini Projects</h3>
              <p className="text-gray-400">
                Quick assistance for small assignments, bug fixes, and script customization. Perfect for students with tight deadlines or specific coding challenges.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg border border-white/5 hover:border-cyan-500/40 transition duration-300 group">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition duration-300">
                <span className="text-cyan-500 text-2xl">
                  <Code className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-cyber font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-400">
                Full stack web applications built with modern frameworks. From simple landing pages to complex data-driven applications.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg border border-white/5 hover:border-pink-500/40 transition duration-300 group">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition duration-300">
                <span className="text-pink-500 text-2xl">
                  <Database className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-cyber font-bold text-white mb-4">Data Science</h3>
              <p className="text-gray-400">
                Data analysis, visualization, and insights. Using Python, pandas, and visualization libraries to extract meaning from complex datasets.
              </p>
            </div>

            <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg border border-white/5 hover:border-yellow-500/40 transition duration-300 group">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition duration-300">
                <span className="text-yellow-500 text-2xl">
                  <Brain className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-cyber font-bold text-white mb-4">AI & ML</h3>
              <p className="text-gray-400">
                Machine learning models and artificial intelligence solutions. Using TensorFlow, PyTorch, and other frameworks to build intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Computer Visual Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(300,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(174,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cyber font-bold text-white mb-4">
              Full Stack <span className="text-[hsl(174,100%,50%)]">Web Development</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge web applications with responsive designs, modern frameworks, and seamless user experiences. From concept to deployment, I build robust full stack solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-[hsl(300,100%,50%)]/30 shadow-[0_0_15px_rgba(255,0,255,0.2)]">
              <CyberpunkComputer className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/80 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <div className="px-3 py-1 bg-[hsl(300,100%,50%)]/20 text-[hsl(300,100%,50%)] text-sm font-cyber rounded-full inline-block">
                  Interactive Cyberpunk Visualizations
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <h3 className="text-2xl font-cyber text-white mb-6">
                Modern Technology Stack
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(174,100%,50%)]/10 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-[hsl(174,100%,50%)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-cyber text-white mb-2">Frontend Development</h4>
                    <p className="text-gray-400">
                      React, Vue, Angular, and more - building responsive and interactive user interfaces with modern frameworks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(300,100%,50%)]/10 rounded-full flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-[hsl(300,100%,50%)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-cyber text-white mb-2">Backend Development</h4>
                    <p className="text-gray-400">
                      Node.js, Express, Django, Flask - creating robust APIs and server-side applications with security best practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[hsl(174,100%,50%)]/10 rounded-full flex items-center justify-center mr-4">
                    <MonitorSmartphone className="w-6 h-6 text-[hsl(174,100%,50%)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-cyber text-white mb-2">Responsive Design</h4>
                    <p className="text-gray-400">
                      Mobile-first approach with adaptable layouts and intuitive interfaces that work seamlessly across all devices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/projects">
                  <div className="relative px-6 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded inline-block">
                    Explore Web Projects
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
