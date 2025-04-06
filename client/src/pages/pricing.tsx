import { Link } from "wouter";
import PriceCard from "@/components/price-card";

export default function Pricing() {
  return (
    <section className="py-20 bg-zinc-800 relative">
      <div className="absolute top-20 right-20 w-72 h-72 bg-[hsl(300,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[hsl(174,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cyber font-bold mb-4">
            <span className="text-white">Custom </span>
            <span className="text-[hsl(60,100%,50%)]">Pricing Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the package that fits your project needs. All packages include full documentation and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard 
            title="Standard Projects"
            price="$99"
            description="Perfect for simple assignments"
            features={[
              "Simple web applications",
              "Basic data analysis",
              "Automation scripts",
              "7-day delivery",
              "1 revision included"
            ]}
            color="cyan"
            label="Basic"
          />
          
          <PriceCard 
            title="Complex Projects"
            price="$249"
            description="Ideal for detailed assignments"
            features={[
              "Full-stack web applications",
              "ML/AI models & implementation",
              "Data visualization dashboards",
              "14-day delivery",
              "3 revisions included"
            ]}
            color="pink"
            label="Advanced"
            isPopular={true}
            className="transform scale-105 z-10"
          />
          
          <PriceCard 
            title="Expert Projects"
            price="$499"
            description="For comprehensive solutions"
            features={[
              "Enterprise-level applications",
              "Advanced AI/Deep Learning",
              "Big data processing systems",
              "21-day delivery",
              "Unlimited revisions"
            ]}
            color="yellow"
            label="Premium"
          />
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 backdrop-blur-md bg-zinc-900/25 p-8 rounded-lg border border-white/5">
          <h3 className="text-xl font-cyber font-bold text-white mb-4">Need a custom solution?</h3>
          <p className="text-gray-300 mb-6">
            Have a project that doesn't fit into these packages? I offer tailored solutions based on your specific requirements and timeline.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <a className="relative px-8 py-3 bg-zinc-800 text-[hsl(174,100%,50%)] font-cyber uppercase tracking-wider hover:bg-zinc-700 transition duration-300 border border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)] rounded">
                Request Custom Quote
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
