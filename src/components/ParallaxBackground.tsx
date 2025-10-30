import React, { useEffect, useRef } from "react";
import "./ParallaxBackground.css";

const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.pageYOffset;
        const layers = containerRef.current.querySelectorAll(".parallax-layer");
        layers.forEach((layer, index) => {
          const speed = (index + 1) * 0.1;
          const yPos = - (scrollTop * speed);
          const rotation = scrollTop * speed * 0.1;
          (layer as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="parallax-container">
      <div className="parallax-layer parallax-layer-1"></div>
      <div className="parallax-layer parallax-layer-2"></div>
      <div className="parallax-layer parallax-layer-3"></div>
      <div className="parallax-layer parallax-layer-4"></div>
    </div>
  );
};

export default ParallaxBackground;
