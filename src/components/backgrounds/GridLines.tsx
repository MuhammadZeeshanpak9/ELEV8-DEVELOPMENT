import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface GridLinesProps {
  className?: string;
  lineCount?: number;
  color?: string;
  animated?: boolean;
  direction?: 'horizontal' | 'vertical' | 'both';
}

export function GridLines({ 
  className = '', 
  lineCount = 20, 
  color = 'rgba(159, 129, 185, 0.1)',
  animated = true,
  direction = 'both'
}: GridLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.grid-line');
    
    lines.forEach((line, i) => {
      gsap.to(line, {
        opacity: gsap.utils.random(0.05, 0.3),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.1,
      });
    });

    return () => {
      gsap.killTweensOf(lines);
    };
  }, [animated]);

  const renderLines = () => {
    const lines = [];
    
    if (direction === 'horizontal' || direction === 'both') {
      for (let i = 0; i < lineCount; i++) {
        lines.push(
          <div
            key={`h-${i}`}
            className="grid-line absolute w-full"
            style={{
              top: `${(i / lineCount) * 100}%`,
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              opacity: 0.1,
            }}
          />
        );
      }
    }
    
    if (direction === 'vertical' || direction === 'both') {
      for (let i = 0; i < lineCount; i++) {
        lines.push(
          <div
            key={`v-${i}`}
            className="grid-line absolute h-full"
            style={{
              left: `${(i / lineCount) * 100}%`,
              width: '1px',
              background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
              opacity: 0.1,
            }}
          />
        );
      }
    }
    
    return lines;
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {renderLines()}
    </div>
  );
}
