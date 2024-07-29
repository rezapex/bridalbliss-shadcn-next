"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const GlowingStarsBackgroundCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-96 w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {children}
        </h1>
        <GlowingStarsBackground />
      </div>
    </div>
  );
};

const GlowingStarsBackground = () => {
  const [glowingStars, setGlowingStars] = useState<Array<JSX.Element>>([]);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    generateGlowingStars();
    setShowStars(true);
    return () => {
      setShowStars(false);
    };
  }, []);

  const generateGlowingStars = () => {
    let stars: Array<JSX.Element> = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 10}s`,
      };
      stars.push(<GlowingStar key={i} style={style} />);
    }
    setGlowingStars(stars);
  };

  return (
    <AnimatePresence>
      {showStars && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 overflow-hidden"
        >
          {glowingStars}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const GlowingStar = ({ style }: { style: React.CSSProperties }) => {
  return (
    <span
      style={style}
      className="absolute rounded-full bg-pink-500 w-1 h-1 animate-glow"
    ></span>
  );
};

export default GlowingStarsBackground;