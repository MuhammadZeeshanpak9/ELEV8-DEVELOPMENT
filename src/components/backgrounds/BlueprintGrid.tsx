import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BlueprintGridProps {
  className?: string;
  density?: number;
  animated?: boolean;
}

export function BlueprintGrid({ className = '', density = 50, animated = true }: BlueprintGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Draw blueprint grid with brand color
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'rgba(159, 129, 185, 0.08)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += density) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += density) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw some architectural elements
      ctx.strokeStyle = 'rgba(159, 129, 185, 0.15)';
      ctx.lineWidth = 1.5;
      
      // Draw blueprint-style rectangles
      const shapes = [
        { x: canvas.width * 0.1, y: canvas.height * 0.2, w: 200, h: 150 },
        { x: canvas.width * 0.7, y: canvas.height * 0.6, w: 180, h: 220 },
        { x: canvas.width * 0.5, y: canvas.height * 0.1, w: 120, h: 100 },
      ];

      shapes.forEach(shape => {
        ctx.strokeRect(shape.x, shape.y, shape.w, shape.h);
        
        // Draw dimension lines
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y - 20);
        ctx.lineTo(shape.x + shape.w, shape.y - 20);
        ctx.stroke();
        
        // Draw ticks
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y - 25);
        ctx.lineTo(shape.x, shape.y - 15);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.w, shape.y - 25);
        ctx.lineTo(shape.x + shape.w, shape.y - 15);
        ctx.stroke();
      });
    };

    drawGrid();

    // Animate with GSAP
    if (animated) {
      gsap.to(canvas, {
        backgroundPosition: '50px 50px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}
