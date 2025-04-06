import { Link } from "wouter";
import { CheckIcon } from "lucide-react";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  color: 'cyan' | 'pink' | 'yellow';
  label: string;
  isPopular?: boolean;
  className?: string;
}

export default function PriceCard({
  title,
  price,
  description,
  features,
  color,
  label,
  isPopular = false,
  className = ""
}: PriceCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]',
          text: 'text-[hsl(174,100%,50%)]',
          bg: 'bg-[hsl(174,100%,50%)]/20',
          buttonBg: 'bg-zinc-700 hover:bg-zinc-600',
          buttonText: 'text-[hsl(174,100%,50%)]',
          checkIcon: 'text-[hsl(174,100%,50%)]'
        };
      case 'pink':
        return {
          border: 'border-[hsl(300,100%,50%)]/50 shadow-[0_0_5px_rgba(255,0,255,0.5),inset_0_0_5px_rgba(255,0,255,0.2)]',
          text: 'text-[hsl(300,100%,50%)]',
          bg: 'bg-[hsl(300,100%,50%)]/20',
          buttonBg: 'bg-[hsl(300,100%,50%)]/20 hover:bg-[hsl(300,100%,50%)]/30',
          buttonText: 'text-[hsl(300,100%,50%)]',
          checkIcon: 'text-[hsl(300,100%,50%)]'
        };
      case 'yellow':
        return {
          border: 'border-[hsl(60,100%,50%)]/50 shadow-[0_0_5px_rgba(255,255,0,0.5),inset_0_0_5px_rgba(255,255,0,0.2)]',
          text: 'text-[hsl(60,100%,50%)]',
          bg: 'bg-[hsl(60,100%,50%)]/20',
          buttonBg: 'bg-zinc-700 hover:bg-zinc-600',
          buttonText: 'text-[hsl(60,100%,50%)]',
          checkIcon: 'text-[hsl(60,100%,50%)]'
        };
      default:
        return {
          border: 'border-[hsl(174,100%,50%)]/50 shadow-[0_0_5px_rgba(12,255,225,0.5),inset_0_0_5px_rgba(12,255,225,0.2)]',
          text: 'text-[hsl(174,100%,50%)]',
          bg: 'bg-[hsl(174,100%,50%)]/20',
          buttonBg: 'bg-zinc-700 hover:bg-zinc-600',
          buttonText: 'text-[hsl(174,100%,50%)]',
          checkIcon: 'text-[hsl(174,100%,50%)]'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div className={`backdrop-blur-md bg-zinc-900/25 rounded-lg p-8 relative border ${colorClasses.border} ${className}`}>
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className={`px-4 py-1 bg-zinc-900 ${colorClasses.text} font-cyber uppercase text-sm tracking-wider`}>{label}</span>
      </div>
      
      {isPopular && (
        <div className="absolute -top-4 right-4">
          <span className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-cyber rounded-full`}>POPULAR</span>
        </div>
      )}
      
      <div className="text-center mb-6 pt-4">
        <h3 className="text-3xl font-cyber font-bold text-white mb-4">{title}</h3>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-400 mr-2">From</span>
          <span className={`text-4xl font-cyber font-bold ${colorClasses.text}`}>{price}</span>
        </div>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className={`w-5 h-5 ${colorClasses.checkIcon} mr-2 mt-0.5`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <Link href="/contact">
          <a className={`block w-full py-3 px-4 ${colorClasses.buttonBg} ${colorClasses.buttonText} font-cyber uppercase tracking-wider transition duration-300 rounded`}>
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
}
