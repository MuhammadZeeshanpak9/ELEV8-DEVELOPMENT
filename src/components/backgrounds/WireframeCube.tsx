import { useEffect, useRef } from 'react';

interface WireframeCubeProps {
  className?: string;
  size?: number;
  color?: string;
}

export function WireframeCube({ 
  className = '', 
  size = 200, 
  color = 'rgba(159, 129, 185, 0.3)',
}: WireframeCubeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size * 2;
    canvas.height = size * 2;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Cube vertices
    const vertices = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ];

    // Cube edges
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    let rotationX = 0;
    let rotationY = 0;

    const project = (vertex: { x: number; y: number; z: number }) => {
      const scale = size / 2;
      const distance = 3;
      const z = vertex.z + distance;
      const x = (vertex.x * scale) / z + centerX;
      const y = (vertex.y * scale) / z + centerY;
      return { x, y };
    };

    const rotateX = (vertex: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: vertex.x,
        y: vertex.y * cos - vertex.z * sin,
        z: vertex.y * sin + vertex.z * cos,
      };
    };

    const rotateY = (vertex: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: vertex.x * cos + vertex.z * sin,
        y: vertex.y,
        z: -vertex.x * sin + vertex.z * cos,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rotationX += 0.005;
      rotationY += 0.01;

      const transformedVertices = vertices.map(v => {
        let rotated = rotateX(v, rotationX);
        rotated = rotateY(rotated, rotationY);
        return project(rotated);
      });

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      edges.forEach(edge => {
        const start = transformedVertices[edge[0]];
        const end = transformedVertices[edge[1]];
        
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      });

      // Draw vertices
      transformedVertices.forEach(v => {
        ctx.beginPath();
        ctx.arc(v.x, v.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [size, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: size * 2, height: size * 2 }}
    />
  );
}
