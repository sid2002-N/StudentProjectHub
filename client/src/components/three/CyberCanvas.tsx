import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CyberCanvasProps {
  className?: string;
}

export default function CyberCanvas({ className = '' }: CyberCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const container = canvasRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
    
    // Materials
    const cyanMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00FFFF, 
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    
    const pinkMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFF00FF, 
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    
    // Grid
    const gridSize = 15;
    const gridDivisions = 15;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0xFF00FF, 0x00FFFF);
    scene.add(gridHelper);
    
    // Cube
    const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
    const cube = new THREE.Mesh(cubeGeometry, cyanMaterial);
    scene.add(cube);
    
    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(2.5, 16, 16);
    const sphere = new THREE.Mesh(sphereGeometry, pinkMaterial);
    sphere.position.set(0, 0, 0);
    scene.add(sphere);
    
    // Positioning
    camera.position.z = 15;
    camera.position.y = 3;
    camera.lookAt(0, 0, 0);
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.003;
      cube.rotation.y += 0.005;
      
      sphere.rotation.x += 0.007;
      sphere.rotation.y += 0.004;
      
      gridHelper.rotation.y += 0.002;
      
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
    <div ref={canvasRef} className={`w-full h-full ${className}`} />
  );
}