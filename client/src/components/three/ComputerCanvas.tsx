import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Box } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "./Loader";

interface ComputersProps {
  isMobile: boolean;
}

const Computers = ({ isMobile }: ComputersProps) => {
  // We'll create a stylized computer model using basic shapes since we don't have the actual gLTF model
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Add a slight hovering animation
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1 - 0.2;
    }
  });

  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 5, 0]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, 5, 0]} intensity={0.5} color="#ff00ff" />
      
      <group ref={groupRef} position={[0, 0, 0]} scale={isMobile ? 0.7 : 0.75}>
        {/* Monitor base */}
        <Box args={[1.5, 0.1, 0.8]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Monitor stand */}
        <Box args={[0.2, 0.5, 0.2]} position={[0, -0.25, 0]}>
          <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Monitor screen */}
        <Box args={[2, 1.1, 0.1]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.3} />
        </Box>
        
        {/* Screen display */}
        <Box args={[1.8, 0.9, 0.05]} position={[0, 0.5, 0.08]}>
          <meshBasicMaterial color="#000000" />
        </Box>
        
        {/* Cyberpunk glowing lines on screen */}
        <group position={[0, 0.5, 0.09]}>
          {/* Horizontal lines */}
          {[...Array(5)].map((_, i) => (
            <Box 
              key={`h-line-${i}`} 
              args={[1.7, 0.01, 0.01]} 
              position={[0, -0.4 + i * 0.2, 0]}
            >
              <meshBasicMaterial color={i % 2 === 0 ? "#00ffff" : "#ff00ff"} />
            </Box>
          ))}
          
          {/* Vertical lines */}
          {[...Array(4)].map((_, i) => (
            <Box 
              key={`v-line-${i}`} 
              args={[0.01, 0.8, 0.01]} 
              position={[-0.8 + i * 0.5, 0, 0]}
            >
              <meshBasicMaterial color={i % 2 === 0 ? "#ff00ff" : "#00ffff"} />
            </Box>
          ))}
        </group>
        
        {/* Keyboard */}
        <Box args={[1.8, 0.1, 0.6]} position={[0, -0.5, 0.8]}>
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.5} />
        </Box>
        
        {/* Keyboard keys (simplified) */}
        <Box args={[1.6, 0.03, 0.5]} position={[0, -0.43, 0.8]}>
          <meshStandardMaterial color="#222222" />
        </Box>
      </group>
    </>
  );
};

interface ComputersCanvasProps {
  className?: string;
}

const ComputersCanvas = ({ className = "" }: ComputersCanvasProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;