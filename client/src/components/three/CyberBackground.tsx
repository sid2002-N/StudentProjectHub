import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CyberBackgroundProps {
  className?: string;
}

export default function CyberBackground({ className = '' }: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const container = canvasRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
    
    // Create Grid
    const gridSize = 100;
    const gridDivisions = 100;
    const gridHelperCyan = new THREE.GridHelper(gridSize, gridDivisions, 0x00FFFF, 0x00FFFF);
    gridHelperCyan.position.set(0, -20, 0);
    gridHelperCyan.material.opacity = 0.2;
    gridHelperCyan.material.transparent = true;
    scene.add(gridHelperCyan);
    
    const gridHelperPink = new THREE.GridHelper(gridSize, gridDivisions, 0xFF00FF, 0xFF00FF);
    gridHelperPink.position.set(0, -20.5, 0);
    gridHelperPink.rotation.y = Math.PI / 4;
    gridHelperPink.material.opacity = 0.1;
    gridHelperPink.material.transparent = true;
    scene.add(gridHelperPink);
    
    // Add some randomly positioned lights
    interface LightData {
      light: THREE.PointLight;
      initialY: number;
      speed: number;
    }
    
    const lights: LightData[] = [];
    const lightColors = [0x00FFFF, 0xFF00FF, 0xFFFFFF];
    
    for (let i = 0; i < 20; i++) {
      const light = new THREE.PointLight(
        lightColors[Math.floor(Math.random() * lightColors.length)],
        1,
        20
      );
      
      // Random position on the grid
      light.position.set(
        (Math.random() - 0.5) * gridSize,
        -19 + Math.random() * 5,
        (Math.random() - 0.5) * gridSize
      );
      
      scene.add(light);
      lights.push({
        light,
        initialY: light.position.y,
        speed: 0.02 + Math.random() * 0.05
      });
    }
    
    // Position camera
    camera.position.set(0, 5, 50);
    camera.lookAt(0, 0, 0);
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      // Animate grid
      gridHelperCyan.position.z += 0.1;
      if (gridHelperCyan.position.z > 50) {
        gridHelperCyan.position.z = -50;
      }
      
      gridHelperPink.position.z += 0.05;
      if (gridHelperPink.position.z > 50) {
        gridHelperPink.position.z = -50;
      }
      
      // Animate lights
      lights.forEach(item => {
        item.light.position.y = item.initialY + Math.sin(Date.now() * item.speed) * 1.5;
      });
      
      renderer.render(scene, camera);
    }
    
    // Handle resize
    const handleResize = () => {
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} />
  );
}