import { motion } from "framer-motion";

const emojis = [
  { icon: "🐕", delay: 0, duration: 6, x: "10%", size: "text-3xl" },
  { icon: "🥣", delay: 1, duration: 8, x: "25%", size: "text-2xl" },
  { icon: "❤️", delay: 2, duration: 7, x: "40%", size: "text-xl" },
  { icon: "🏠", delay: 0.5, duration: 9, x: "55%", size: "text-2xl" },
  { icon: "🌟", delay: 1.5, duration: 6.5, x: "70%", size: "text-3xl" },
  { icon: "🧬", delay: 2.5, duration: 7.5, x: "85%", size: "text-xl" },
];

const FloatingEmojis = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {emojis.map((emoji, index) => (
        <motion.span
          key={index}
          className={`absolute ${emoji.size} opacity-20`}
          style={{ left: emoji.x }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: ["100vh", "-10vh"],
            opacity: [0, 0.3, 0.3, 0],
            rotate: [-10, 10, -10, 10, -10],
            x: [0, 20, -20, 20, 0],
          }}
          transition={{
            duration: emoji.duration,
            delay: emoji.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {emoji.icon}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
