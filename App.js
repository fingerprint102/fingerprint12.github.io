import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "#ff006e", // pink
    "#8338ec", // purple
    "#3a86ff", // blue
    "#06d6a0", // green
    "#ffd166", // yellow
    "#ef476f", // red
  ];

  // Change color every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center h-screen text-6xl font-bold text-white transition-all"
      style={{
        backgroundColor: colors[colorIndex],
      }}
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 0.8, repeat: Infinity }}
    >
      Hello, World!
    </motion.div>
  );
}
