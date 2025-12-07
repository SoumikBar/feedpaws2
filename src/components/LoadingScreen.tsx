import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Animated Paw */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              className="text-primary"
              fill="currentColor"
            >
              {/* Main pad */}
              <ellipse cx="50" cy="65" rx="22" ry="18" />
              {/* Top pads */}
              <circle cx="30" cy="35" r="12" />
              <circle cx="70" cy="35" r="12" />
              {/* Side pads */}
              <circle cx="22" cy="55" r="10" />
              <circle cx="78" cy="55" r="10" />
            </svg>
          </motion.div>

          {/* Logo Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 font-serif text-3xl text-foreground"
          >
            Feed Paws
            Initiative
          </motion.h1>

          {/* Progress Bar */}
          <div className="w-64 h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full rounded-full gradient-hero"
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            Loading kindness... {progress}%
          </motion.p>

          {/* Floating decorative elements */}
          <motion.span
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute text-2xl top-1/4 left-1/4 opacity-30"
          >
            🐕
          </motion.span>
          <motion.span
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute text-2xl top-1/3 right-1/4 opacity-30"
          >
            ❤️
          </motion.span>
          <motion.span
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute text-2xl bottom-1/4 left-1/3 opacity-30"
          >
            🌟
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
