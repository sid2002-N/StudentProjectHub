import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-cyber font-bold text-[hsl(174,100%,50%)] mb-4">
              TECH<span className="text-[hsl(300,100%,50%)]">PROJECTS</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional custom projects for students in Data Science, AI, Web Development, and more. Quality solutions delivered on time.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
              <a href="mailto:contact@techprojects.dev" className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-cyber font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Home</a></Link></li>
              <li><Link href="/projects"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Projects</a></Link></li>
              <li><Link href="/pricing"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Pricing</a></Link></li>
              <li><Link href="/about"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">About</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-cyber font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/projects"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Web Development</a></Link></li>
              <li><Link href="/projects"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Machine Learning</a></Link></li>
              <li><Link href="/projects"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Data Analysis</a></Link></li>
              <li><Link href="/projects"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Automation</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-[hsl(174,100%,50%)] transition">Custom Solutions</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TechProjects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
