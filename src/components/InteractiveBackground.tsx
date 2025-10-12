import React, { useRef, useEffect } from "react";

interface InteractiveBackgroundProps {
  theme: string;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  theme,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };

    const pointColor =
      theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";
    const lineColor =
      theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();

    const gap = 40;
    const gridSize = {
      width: Math.ceil(canvas.width / gap) + 1,
      height: Math.ceil(canvas.height / gap) + 1,
    };

    class Point {
      x: number;
      y: number;
      originalX: number;
      originalY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
      }

      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          this.x += forceDirectionX * force * 15;
          this.y += forceDirectionY * force * 15;
        } else {
          this.x += (this.originalX - this.x) * 0.1;
          this.y += (this.originalY - this.y) * 0.1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();
      }
    }

    let points: Point[][] = [];

    const init = () => {
      points = [];
      for (let i = 0; i < gridSize.width; i++) {
        let row: Point[] = [];
        for (let j = 0; j < gridSize.height; j++) {
          row.push(new Point(i * gap, j * gap));
        }
        points.push(row);
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < gridSize.width; i++) {
        for (let j = 0; j < gridSize.height; j++) {
          points[i][j].update();
        }
      }

      for (let i = 0; i < gridSize.width - 1; i++) {
        for (let j = 0; j < gridSize.height - 1; j++) {
          const p1 = points[i][j];
          const p2 = points[i + 1][j];
          const p3 = points[i][j + 1];
          const p4 = points[i + 1][j + 1];

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.strokeStyle = lineColor;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default InteractiveBackground;
