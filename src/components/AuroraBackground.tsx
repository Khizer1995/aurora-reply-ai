
import { useEffect, useRef } from "react";

export const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient layers for aurora effect
      const gradients = [
        { colors: ["#00ffff", "#0080ff", "#8000ff"], alpha: 0.15, speed: 0.5 },
        { colors: ["#ff00ff", "#ff0080", "#8000ff"], alpha: 0.12, speed: 0.3 },
        { colors: ["#00ff80", "#00ffff", "#0080ff"], alpha: 0.18, speed: 0.7 },
      ];

      gradients.forEach((layer, index) => {
        const gradient = ctx.createLinearGradient(
          0, 
          canvas.height * 0.3 + Math.sin(time * layer.speed + index) * 100,
          canvas.width,
          canvas.height * 0.7 + Math.cos(time * layer.speed + index) * 150
        );

        layer.colors.forEach((color, i) => {
          gradient.addColorStop(i / (layer.colors.length - 1), color + Math.floor(layer.alpha * 255).toString(16).padStart(2, '0'));
        });

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add flowing waves
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6 + Math.sin(time * 0.8 + i) * 60);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height * 0.6 + 
                   Math.sin((x * 0.005) + (time * 0.8) + i) * 60 +
                   Math.sin((x * 0.008) + (time * 0.5) + i * 2) * 40;
          ctx.lineTo(x, y);
        }
        
        const waveGradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height);
        waveGradient.addColorStop(0, `rgba(0, 255, 255, ${0.1 - i * 0.02})`);
        waveGradient.addColorStop(1, `rgba(128, 0, 255, ${0.05 - i * 0.01})`);
        
        ctx.strokeStyle = waveGradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Add stars
      for (let i = 0; i < 100; i++) {
        const x = (i * 137.5) % canvas.width;
        const y = (i * 47.3) % (canvas.height * 0.4);
        const twinkle = Math.sin(time * 2 + i * 0.1) * 0.5 + 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.8})`;
        ctx.fill();
      }

      time += 0.01;
      animationId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};
