import { useEffect, useRef, useState } from 'react';

interface EnergyArc {
  id: number;
  color: string;
  duration: number;
  delay: number;
  path: string;
}

export default function EnergyField() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateRandomPath = (width: number, height: number): string => {
    const startX = Math.random() * width;
    const startY = Math.random() * height;
    const cp1x = Math.random() * width;
    const cp1y = Math.random() * height;
    const cp2x = Math.random() * width;
    const cp2y = Math.random() * height;
    const endX = Math.random() * width;
    const endY = Math.random() * height;
    
    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  const colors = ['#9f6bff', '#7a5cff', '#b794f6', '#818cf8'];
  
  const [arcs, setArcs] = useState<EnergyArc[]>([]);

  useEffect(() => {
    const updateArcs = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const newArcs: EnergyArc[] = [];
      
      for (let i = 0; i < 8; i++) {
        newArcs.push({
          id: Date.now() + i,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: 3 + Math.random() * 4, // 3-7 seconds
          delay: Math.random() * 2,
          path: generateRandomPath(width, height)
        });
      }
      
      setArcs(newArcs);
    };

    updateArcs();
    const interval = setInterval(updateArcs, 7000); // Regenerate every 7 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {arcs.map((arc) => (
          <g key={arc.id}>
            <path
              d={arc.path}
              fill="none"
              stroke={arc.color}
              strokeWidth="2"
              opacity="0.6"
              filter="url(#glow)"
              style={{
                animation: `energyPulse ${arc.duration}s ${arc.delay}s ease-in-out infinite`,
                transformOrigin: 'center'
              }}
            />
            <path
              d={arc.path}
              fill="none"
              stroke={arc.color}
              strokeWidth="1"
              opacity="0.3"
              style={{
                animation: `energyPulse ${arc.duration}s ${arc.delay + 0.5}s ease-in-out infinite`,
                transformOrigin: 'center'
              }}
            />
          </g>
        ))}
      </svg>
      
      <style>{`
        @keyframes energyPulse {
          0% {
            opacity: 0;
            stroke-dasharray: 0 1000;
          }
          50% {
            opacity: 0.8;
            stroke-dasharray: 500 500;
          }
          100% {
            opacity: 0;
            stroke-dasharray: 1000 0;
          }
        }
      `}</style>
    </div>
  );
}
