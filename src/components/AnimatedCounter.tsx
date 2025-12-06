import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}
const AnimatedCounter = ({
  end,
  duration = 2,
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);
  return <motion.span ref={ref} initial={{
    opacity: 0,
    scale: 0.5
  }} animate={isInView ? {
    opacity: 1,
    scale: 1
  } : {}} transition={{
    duration: 0.5
  }} className="font-serif text-5xl font-bold text-gradient md:text-6xl text-primary-foreground text-center">
      {prefix}
      {count}
      {suffix}
    </motion.span>;
};
export default AnimatedCounter;