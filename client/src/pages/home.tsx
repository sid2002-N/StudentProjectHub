import { Link } from "wouter";
import StatsCard from "@/components/stats-card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pb-32 md:pt-36 relative overflow-hidden">
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
                Full Stack Web • Data Science • AI • Dev
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Expert development services for students requiring high-quality, custom tech projects. From complex ML models to responsive web applications, I deliver professional solutions to help you excel.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/projects">
                  <a className="relative px-6 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded">
                    View Projects
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="relative px-6 py-3 bg-zinc-800 text-[hsl(300,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)] rounded">
                    Get Your Project Done
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern coding workspace" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
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
    </>
  );
}
