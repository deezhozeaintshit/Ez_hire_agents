import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle drifting particles
    const particleCount = 42;
    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      baseAlpha: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const colors = [
      'rgba(16, 185, 129,', // emerald
      'rgba(0, 220, 130,',  // hireEZ bright green
      'rgba(6, 182, 212,',  // cyan
      'rgba(99, 102, 241,', // indigo
    ];

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      baseAlpha: Math.random() * 0.35 + 0.15,
      alpha: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulseSpeed: Math.random() * 0.02 + 0.008,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Render subtle drifting particles with soft radial glow
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges seamlessly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        p.alpha = p.baseAlpha + Math.sin(time * 1.5 + p.pulseOffset) * 0.12;
        if (p.alpha < 0.05) p.alpha = 0.05;

        // Draw soft glow
        const glowRadius = p.radius * 3.5;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        grad.addColorStop(0, `${p.color} ${p.alpha})`);
        grad.addColorStop(0.5, `${p.color} ${p.alpha * 0.4})`);
        grad.addColorStop(1, `${p.color} 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle center
        ctx.fillStyle = `${p.color} ${Math.min(1, p.alpha * 1.6)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with gentle luminous hairline threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.08;
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dynamic Slow-Moving Mesh Aurora Gradients */}
      <div className="absolute -top-[25%] -left-[15%] w-[85vw] h-[85vw] max-w-[950px] max-h-[950px] rounded-full bg-emerald-500/10 blur-[160px] animate-aurora-slow mix-blend-screen" />
      <div className="absolute top-[35%] -right-[15%] w-[75vw] h-[75vw] max-w-[850px] max-h-[850px] rounded-full bg-cyan-500/[0.08] blur-[170px] animate-aurora-reverse mix-blend-screen" />
      <div className="absolute top-[75%] left-[10%] w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] rounded-full bg-teal-500/[0.07] blur-[160px] animate-aurora-slow mix-blend-screen" />
      <div className="absolute top-[15%] right-[20%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-500/[0.05] blur-[150px] animate-aurora-reverse mix-blend-screen" />

      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Micro Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />
    </div>
  );
};
