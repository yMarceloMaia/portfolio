import { motion, Variants } from "framer-motion";
import { ReactNode, RefObject } from "react";

type Direction = "up" | "down" | "left" | "right";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  scrollRef?: RefObject<HTMLElement>;
};

const getVariants = (direction: Direction): Variants => {
  const offset = 40;
  const origins: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: offset },
    down: { x: 0, y: -offset },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
  };

  return {
    hidden: {
      opacity: 0,
      x: origins[direction].x,
      y: origins[direction].y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  scrollRef,
}: ScrollRevealProps) => {
  return (
    <motion.div
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, root: scrollRef }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
