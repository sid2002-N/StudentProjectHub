import React from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const LogoContent = () => (
    <div className={cn("flex items-center space-x-2 hover:opacity-80 transition-opacity", className)}>
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        {/* Glowing background effect */}
        <defs>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="cyberbg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111111" />
            <stop offset="100%" stopColor="#222222" />
          </linearGradient>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect x="0" y="0" width="64" height="64" rx="5" fill="url(#cyberbg)" />
        
        {/* Grid lines */}
        <g stroke="#333333" strokeWidth="0.5">
          <line x1="8" y1="0" x2="8" y2="64" />
          <line x1="16" y1="0" x2="16" y2="64" />
          <line x1="24" y1="0" x2="24" y2="64" />
          <line x1="32" y1="0" x2="32" y2="64" />
          <line x1="40" y1="0" x2="40" y2="64" />
          <line x1="48" y1="0" x2="48" y2="64" />
          <line x1="56" y1="0" x2="56" y2="64" />
          
          <line x1="0" y1="8" x2="64" y2="8" />
          <line x1="0" y1="16" x2="64" y2="16" />
          <line x1="0" y1="24" x2="64" y2="24" />
          <line x1="0" y1="32" x2="64" y2="32" />
          <line x1="0" y1="40" x2="64" y2="40" />
          <line x1="0" y1="48" x2="64" y2="48" />
          <line x1="0" y1="56" x2="64" y2="56" />
        </g>
        
        {/* Main "CP" letters (for CyberPort or CyberProject) */}
        <g filter="url(#glow)">
          {/* C letter */}
          <path d="M18 18 L18 46 L34 46" stroke="url(#neonGradient)" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* P letter */}
          <path d="M36 18 L36 46 M36 18 L48 18 C53 18 53 32 48 32 L36 32" stroke="url(#neonGradient)" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Circuit board node points */}
        <circle cx="18" cy="18" r="2" fill="#00ffff" />
        <circle cx="34" cy="46" r="2" fill="#ff00ff" />
        <circle cx="36" cy="32" r="2" fill="#00ffff" />
        <circle cx="48" cy="18" r="2" fill="#ff00ff" />
        <circle cx="36" cy="46" r="2" fill="#00ffff" />
        
        {/* Digital artifacts */}
        <rect x="12" y="26" width="3" height="1" fill="#00ffff" opacity="0.8" />
        <rect x="50" y="38" width="3" height="1" fill="#ff00ff" opacity="0.8" />
        <rect x="26" y="10" width="1" height="3" fill="#00ffff" opacity="0.8" />
        <rect x="42" y="52" width="1" height="3" fill="#ff00ff" opacity="0.8" />
      </svg>
      <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text">
        CyberProject
      </span>
    </div>
  );

  return (
    <Link href="/">
      <LogoContent />
    </Link>
  );
}