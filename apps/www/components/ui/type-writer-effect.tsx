"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsLength = words.length;

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );

    animate(
      "span:last-child",
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }
    );

    animate(
      "#word, #cursor",
      {
        x: ["0%", "-100%"],
      },
      {
        duration: 2,
        times: [0, 1],
        delay: stagger(2),
        repeatDelay: 2,
        repeat: Infinity,
      }
    );
  }, [animate, wordsLength]);

  const renderWords = () => {
    return (
      <div
        id="word"
        className="inline-block"
      >
        {words.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.split("").map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  key={`char-${index}`}
                  className={cn(word.className, "opacity-0")}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div ref={scope} className="inline">
      <div
        className={cn(
          "inline-block text-2xl font-bold tracking-tight sm:text-5xl",
          className
        )}
      >
        {renderWords()}
        <motion.span
          initial={{
            opacity: 0,
          }}
          id="cursor"
          className={cn(
            "inline-block rounded-sm w-[4px] h-8 bg-pink-400",
            cursorClassName
          )}
        ></motion.span>
      </div>
    </div>
  );
};