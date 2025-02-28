import { useEffect, useRef } from 'react';

const Animation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let rotation = 0;
    
    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Increment rotation
      rotation += 0.005;
      
      // Draw multiple rotating curves
      drawCurves(ctx, canvas.width / 2, canvas.height / 2, rotation);
      
      // Continue animation loop
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Function to draw multiple curves
  const drawCurves = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, rotation: number) => {
    const colors = ['#FF5E5B', '#D8D8D8', '#FFFFEA', '#00CECB', '#FFED66'];
    
    // Draw multiple curves with different sizes and rotations
    for (let i = 0; i < 5; i++) {
      const scale = 1 + i * 0.4;
      const offsetRotation = rotation + (i * Math.PI / 5);
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(offsetRotation);
      ctx.scale(scale, scale);
      
      // Set curve style
      ctx.strokeStyle = colors[i % colors.length];
      ctx.lineWidth = 3 / scale;
      
      // Draw a curve
      ctx.beginPath();
      ctx.moveTo(-50, -20);
      ctx.bezierCurveTo(-40, -60, 40, -60, 50, -20);
      ctx.bezierCurveTo(60, 10, 40, 40, 0, 40);
      ctx.bezierCurveTo(-40, 40, -60, 10, -50, -20);
      ctx.stroke();
      
      ctx.restore();
    }
    
    // No text, just the spinning curves
  };
  
  return (
    <div className="wow-container">
      <canvas ref={canvasRef} className="wow-canvas"></canvas>
    </div>
  );
};

export default Animation;