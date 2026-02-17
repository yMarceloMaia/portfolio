import React, { useRef, useEffect } from "react";

interface InteractiveBackgroundProps {
  theme: string;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speed: number;
  layer: number;
  angle: number;
  drift: number;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  theme,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };
    let smoothMouse = { x: -1000, y: -1000 };
    let animationId: number;
    let time = 0;

    const isDark = theme === "dark";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resizeCanvas);
    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    resizeCanvas();

    // Layer config: depth multiplier for parallax, particle count, opacity, connection distance
    const layers = [
      { depth: 0.02, count: 40, opacity: 0.08, maxSize: 1.5, connectionDist: 0 },
      { depth: 0.05, count: 30, opacity: 0.15, maxSize: 2, connectionDist: 120 },
      { depth: 0.12, count: 20, opacity: 0.3, maxSize: 3, connectionDist: 150 },
    ];

    const particles: Particle[] = [];

    // Create particles for each layer
    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < layer.count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * layer.maxSize + 0.5,
          speed: layer.depth,
          layer: layerIndex,
          angle: Math.random() * Math.PI * 2,
          drift: 0.2 + Math.random() * 0.5,
        });
      }
    });

    // Grid for the deepest interactive mesh layer
    const gridGap = 60;
    const gridCols = Math.ceil(canvas.width / gridGap) + 1;
    const gridRows = Math.ceil(canvas.height / gridGap) + 1;

    interface GridPoint {
      x: number;
      y: number;
      ox: number;
      oy: number;
    }

    const gridPoints: GridPoint[][] = [];
    for (let i = 0; i < gridCols; i++) {
      const row: GridPoint[] = [];
      for (let j = 0; j < gridRows; j++) {
        row.push({ x: i * gridGap, y: j * gridGap, ox: i * gridGap, oy: j * gridGap });
      }
      gridPoints.push(row);
    }

    const getColor = (alpha: number) => {
      return isDark
        ? `rgba(255, 255, 255, ${alpha})`
        : `rgba(0, 0, 0, ${alpha})`;
    };

    const drawGrid = () => {
      if (!ctx) return;

      const gridParallaxDepth = 0.03;
      const offsetX = (smoothMouse.x - canvas.width / 2) * gridParallaxDepth;
      const offsetY = (smoothMouse.y - canvas.height / 2) * gridParallaxDepth;

      // Update grid points with mouse repulsion
      for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
          const p = gridPoints[i][j];
          const targetX = p.ox + offsetX;
          const targetY = p.oy + offsetY;

          if (!prefersReducedMotion) {
            const dx = p.x - smoothMouse.x;
            const dy = p.y - smoothMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 120;

            if (dist < maxDist) {
              const force = (maxDist - dist) / maxDist;
              p.x += (dx / dist) * force * 8;
              p.y += (dy / dist) * force * 8;
            }
          }

          p.x += (targetX - p.x) * 0.08;
          p.y += (targetY - p.y) * 0.08;
        }
      }

      // Draw grid lines
      ctx.strokeStyle = getColor(0.06);
      ctx.lineWidth = 0.5;
      for (let i = 0; i < gridCols - 1; i++) {
        for (let j = 0; j < gridRows - 1; j++) {
          const p1 = gridPoints[i][j];
          const p2 = gridPoints[i + 1][j];
          const p3 = gridPoints[i][j + 1];
          const p4 = gridPoints[i + 1][j + 1];

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    const drawParticles = () => {
      if (!ctx) return;

      particles.forEach((p) => {
        const layer = layers[p.layer];

        // Parallax offset based on mouse position
        const parallaxX = (smoothMouse.x - canvas.width / 2) * p.speed;
        const parallaxY = (smoothMouse.y - canvas.height / 2) * p.speed;

        // Gentle floating drift
        if (!prefersReducedMotion) {
          p.angle += 0.005 * p.drift;
        }
        const driftX = Math.cos(p.angle) * p.drift * 0.3;
        const driftY = Math.sin(p.angle * 0.7) * p.drift * 0.3;

        p.x = p.baseX + parallaxX + driftX;
        p.y = p.baseY + parallaxY + driftY;

        // Wrap around screen
        if (p.x < -20) p.baseX += canvas.width + 40;
        if (p.x > canvas.width + 20) p.baseX -= canvas.width + 40;
        if (p.y < -20) p.baseY += canvas.height + 40;
        if (p.y > canvas.height + 20) p.baseY -= canvas.height + 40;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = getColor(layer.opacity);
        ctx.fill();
      });

      // Draw connections between particles on the same layer
      layers.forEach((layer, layerIndex) => {
        if (layer.connectionDist === 0) return;

        const layerParticles = particles.filter((p) => p.layer === layerIndex);

        for (let i = 0; i < layerParticles.length; i++) {
          for (let j = i + 1; j < layerParticles.length; j++) {
            const a = layerParticles[i];
            const b = layerParticles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < layer.connectionDist) {
              const alpha =
                layer.opacity * 0.4 * (1 - dist / layer.connectionDist);
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = getColor(alpha);
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      // Mouse glow
      if (!prefersReducedMotion && smoothMouse.x > 0) {
        const glowRadius = 180;
        const gradient = ctx.createRadialGradient(
          smoothMouse.x,
          smoothMouse.y,
          0,
          smoothMouse.x,
          smoothMouse.y,
          glowRadius
        );
        gradient.addColorStop(0, getColor(0.06));
        gradient.addColorStop(1, getColor(0));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(smoothMouse.x, smoothMouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawStaticScene = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static grid
      ctx.strokeStyle = getColor(0.06);
      ctx.lineWidth = 0.5;
      for (let i = 0; i < gridCols - 1; i++) {
        for (let j = 0; j < gridRows - 1; j++) {
          const p1 = gridPoints[i][j];
          const p2 = gridPoints[i + 1][j];
          const p3 = gridPoints[i][j + 1];
          const p4 = gridPoints[i + 1][j + 1];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.stroke();
        }
      }

      // Draw static particles
      particles.forEach((p) => {
        const layer = layers[p.layer];
        ctx.beginPath();
        ctx.arc(p.baseX, p.baseY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = getColor(layer.opacity);
        ctx.fill();
      });
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time++;

      // Smooth mouse interpolation
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.08;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.08;

      drawGrid();
      drawParticles();

      animationId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      drawStaticScene();
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default InteractiveBackground;
