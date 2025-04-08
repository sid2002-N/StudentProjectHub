import React, { useEffect, useRef } from 'react';

export default function CyberpunkComputer({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Animation variables
    let frameId: number;
    let t = 0;
    
    // Draw the computer
    const draw = () => {
      const { width, height } = canvas;
      
      // Clear canvas
      ctx.fillStyle = '#0f0f12';
      ctx.fillRect(0, 0, width, height);
      
      // Draw monitor
      const monitorWidth = width * 0.8;
      const monitorHeight = height * 0.6;
      const monitorX = (width - monitorWidth) / 2;
      const monitorY = height * 0.1;
      
      // Monitor outer case
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(monitorX, monitorY, monitorWidth, monitorHeight);
      
      // Monitor screen
      const screenPadding = 10;
      ctx.fillStyle = '#000000';
      ctx.fillRect(
        monitorX + screenPadding, 
        monitorY + screenPadding, 
        monitorWidth - 2 * screenPadding, 
        monitorHeight - 2 * screenPadding
      );
      
      // Screen content - glowing cyberpunk lines
      const screenInnerX = monitorX + screenPadding;
      const screenInnerY = monitorY + screenPadding;
      const screenInnerWidth = monitorWidth - 2 * screenPadding;
      const screenInnerHeight = monitorHeight - 2 * screenPadding;
      
      // Draw horizontal grid lines
      const lineCount = 8;
      const lineSpacing = screenInnerHeight / lineCount;
      
      for (let i = 0; i < lineCount; i++) {
        const y = screenInnerY + i * lineSpacing;
        
        // Cyan lines
        ctx.strokeStyle = i % 2 === 0 ? '#00ffff' : '#ff00ff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(screenInnerX, y);
        ctx.lineTo(screenInnerX + screenInnerWidth, y);
        ctx.stroke();
        
        // Add glow effect
        ctx.shadowColor = i % 2 === 0 ? '#00ffff' : '#ff00ff';
        ctx.shadowBlur = 5 + 3 * Math.sin(t * 0.5 + i * 0.5);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      
      // Vertical lines
      const vLineCount = 6;
      const vLineSpacing = screenInnerWidth / vLineCount;
      
      for (let i = 0; i < vLineCount; i++) {
        const x = screenInnerX + i * vLineSpacing;
        
        ctx.strokeStyle = i % 2 === 0 ? '#ff00ff' : '#00ffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, screenInnerY);
        ctx.lineTo(x, screenInnerY + screenInnerHeight);
        ctx.stroke();
        
        ctx.shadowColor = i % 2 === 0 ? '#ff00ff' : '#00ffff';
        ctx.shadowBlur = 5 + 3 * Math.sin(t * 0.5 + i * 0.5);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      
      // Draw pulsing cyberpunk elements
      const cycle = Math.sin(t * 0.3) * 0.5 + 0.5;
      
      // Keyboard
      const keyboardWidth = monitorWidth * 0.9;
      const keyboardHeight = height * 0.1;
      const keyboardX = (width - keyboardWidth) / 2;
      const keyboardY = height * 0.75;
      
      // Keyboard base
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(keyboardX, keyboardY, keyboardWidth, keyboardHeight);
      
      // Keyboard keys
      const keyPadding = 5;
      const keySize = (keyboardWidth - keyPadding * 8) / 8;
      
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 8; col++) {
          const x = keyboardX + keyPadding + col * (keySize + keyPadding);
          const y = keyboardY + keyPadding + row * ((keyboardHeight - 2 * keyPadding) / 3);
          
          // Key background
          ctx.fillStyle = '#222222';
          ctx.fillRect(
            x, y, 
            keySize, (keyboardHeight - 2 * keyPadding) / 3 - keyPadding
          );
          
          // Random keys glow
          if (Math.random() < 0.05) {
            ctx.fillStyle = Math.random() > 0.5 ? 
              `rgba(0, 255, 255, ${0.3 + cycle * 0.4})` : 
              `rgba(255, 0, 255, ${0.3 + cycle * 0.4})`;
            
            ctx.fillRect(
              x, y, 
              keySize, (keyboardHeight - 2 * keyPadding) / 3 - keyPadding
            );
          }
        }
      }
      
      // Monitor stand
      const standWidth = monitorWidth * 0.1;
      const standHeight = height * 0.15;
      const standX = (width - standWidth) / 2;
      const standY = monitorY + monitorHeight;
      
      ctx.fillStyle = '#222222';
      ctx.fillRect(standX, standY, standWidth, standHeight);
      
      // Stand base
      const baseWidth = standWidth * 3;
      const baseHeight = standHeight * 0.2;
      const baseX = (width - baseWidth) / 2;
      const baseY = standY + standHeight - baseHeight;
      
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(baseX, baseY, baseWidth, baseHeight);
      
      t += 0.03;
      frameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}