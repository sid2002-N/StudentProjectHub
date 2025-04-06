import { Link } from "wouter";

export default function About() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-cyber font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-[hsl(300,100%,50%)]">Me</span>
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a Computer Science graduate with a BTech in CSE and specialized certification in Data Science & AI. My passion lies in helping students complete challenging technical projects with professional quality and attention to detail.
            </p>
            <p className="text-gray-300 mb-6">
              With expertise across multiple domains including web development, machine learning, data analysis, and automation, I provide comprehensive solutions tailored to your academic needs.
            </p>
            
            <div className="mb-8">
              <h3 className="text-[hsl(174,100%,50%)] font-cyber text-xl mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">TensorFlow</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">PyTorch</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">SQL</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">NoSQL</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">Data Visualization</span>
                <span className="px-3 py-1 bg-zinc-700 text-white text-sm rounded-full">AWS</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="relative px-6 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded">
                  Contact Me
                </a>
              </Link>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative px-6 py-3 bg-zinc-800 text-[hsl(300,100%,50%)] font-cyber uppercase tracking-wider text-center hover:bg-zinc-700 transition duration-300 border border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)] rounded flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-lg overflow-hidden border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Tech workspace" 
                className="w-full object-cover rounded-lg"
                style={{ height: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-[hsl(174,100%,50%)]/20 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-zinc-900/25 p-6 rounded-lg border border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)] max-w-xs">
              <div className="flex items-start">
                <div className="mr-4 text-[hsl(300,100%,50%)]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-cyber text-lg mb-1">Innovation-Driven</h4>
                  <p className="text-gray-400 text-sm">I bring creative solutions to complex technical challenges for stand-out projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
