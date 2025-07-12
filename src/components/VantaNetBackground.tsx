
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => any;
    };
    THREE: any;
  }
}

interface VantaNetBackgroundProps {
  className?: string;
}

const VantaNetBackground = ({ className = "" }: VantaNetBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load Vanta and Three.js scripts dynamically
    const loadVanta = async () => {
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
        document.head.appendChild(threeScript);
        await new Promise(resolve => threeScript.onload = resolve);
      }

      if (!window.VANTA) {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        document.head.appendChild(vantaScript);
        await new Promise(resolve => vantaScript.onload = resolve);
      }

      if (vantaRef.current && window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x525252,
          backgroundColor: 0x171717,
          points: 8.00,
          maxDistance: 25.00,
          spacing: 20.00
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`absolute inset-0 ${className}`}
    />
  );
};

export default VantaNetBackground;
