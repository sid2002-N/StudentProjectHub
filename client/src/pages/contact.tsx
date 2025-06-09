import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <section className="py-20 bg-zinc-800 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(300,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cyber font-bold mb-4">
              <span className="text-white">Get Your </span>
              <span className="text-[hsl(174,100%,50%)]">Project Started</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fill out the form below with your project details, and I'll get back to you within 24 hours with a custom quote and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <ContactForm />
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div className="backdrop-blur-md bg-zinc-900/25 p-6 rounded-lg border border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)]">
                <h3 className="text-xl font-cyber font-semibold mb-4 text-[hsl(300,100%,50%)]">Quick Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[hsl(300,100%,50%)] mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:contact@techprojects.dev" className="text-[hsl(300,100%,50%)] hover:text-white transition">siddharthpsanthosh007@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[hsl(300,100%,50%)] mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">WhatsApp</p>
                      <a href="https://wa.me/+91 6282762713" className="text-[hsl(300,100%,50%)] hover:text-white transition">+916282762713</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[hsl(300,100%,50%)] mr-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Response Time</p>
                      <p className="text-white">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-md bg-zinc-900/25 p-6 rounded-lg border border-[hsl(60,100%,50%)]/50 shadow-[0_0_5px_rgba(255,255,0,0.5),inset_0_0_5px_rgba(255,255,0,0.2)]">
                <h3 className="text-xl font-cyber font-semibold mb-4 text-[hsl(60,100%,50%)]">Social Profiles</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/sid2002-N" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[hsl(60,100%,50%)] transition-colors p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/siddharth-p-santhosh-a08328336/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[hsl(60,100%,50%)] transition-colors p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/siddharthpSant1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[hsl(60,100%,50%)] transition-colors p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="backdrop-blur-md bg-zinc-900/25 p-6 rounded-lg border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]">
                <h3 className="text-xl font-cyber font-semibold mb-4 text-[hsl(174,100%,50%)]">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-cyber text-base mb-1">How do payments work?</h4>
                    <p className="text-gray-400 text-sm">50% upfront payment, 50% upon completion and approval.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-cyber text-base mb-1">Do you provide source code?</h4>
                    <p className="text-gray-400 text-sm">Yes, all projects include full source code and documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
