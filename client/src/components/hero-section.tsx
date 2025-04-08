import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import CyberpunkComputer from "./cyberpunk-computer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pb-32 md:pt-36 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(174,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(300,100%,50%)] opacity-5 rounded-full blur-3xl -z-10"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          
          {/* Left column - text content */}
          <div className="flex-1 max-w-2xl">
            {/* Animated line decoration */}
            <div className="flex items-center mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-5 h-5 rounded-full bg-[hsl(300,100%,50%)]" 
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 ml-2 bg-gradient-to-r from-[hsl(300,100%,50%)] to-[hsl(174,100%,50%)]" 
              />
            </div>
            
            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-cyber font-bold leading-tight mb-4"
            >
              <span className="text-white">Custom </span>
              <span className="text-[hsl(174,100%,50%)]">Tech Projects</span>
              <br />
              <span className="text-[hsl(300,100%,50%)]">for Students</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg mb-8"
            >
              I develop full stack web applications, data science solutions, and custom 
              programming projects to help students excel in their academic journey.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
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
            </motion.div>
          </div>
          
          {/* Right column - 3D/Computer visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="relative rounded-lg overflow-hidden border border-[hsl(174,100%,50%)]/50 shadow-[0_0_15px_rgba(12,255,225,0.3),inset_0_0_5px_rgba(12,255,225,0.2)] aspect-[4/3]">
              <CyberpunkComputer className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/70 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[hsl(174,100%,50%)]/50 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[hsl(174,100%,50%)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}