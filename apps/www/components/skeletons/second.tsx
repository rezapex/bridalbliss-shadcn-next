"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState } from "react";
import { IconMusic, IconHeart } from "@tabler/icons-react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;

    setAnimating(true);
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(0.5),
      }
    );
    setAnimating(false);
  };

  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          <div className="w-40 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6 flex items-center justify-center text-xs font-medium">
            Wedding Playlist AI
          </div>
          <div
            onMouseEnter={handleAnimation}
            ref={scope}
            className="content mt-4 w-[90%] mx-auto"
          >
            <UserMessage>
              Hi! I need help creating a playlist for my wedding.
            </UserMessage>
            <AIMessage>
              Sure! What kind of music do you both enjoy?
            </AIMessage>
            <UserMessage>
              We love classic rock and modern pop!
            </UserMessage>
            <AIMessage>
              Great! Here are some suggestions:
              <div className="flex flex-col space-y-2">
                <SongSuggestion title="Don't Stop Believin'" artist="Journey" />
                <SongSuggestion title="Uptown Funk" artist="Mark Ronson ft. Bruno Mars" />
              </div>
            </AIMessage>
            <UserMessage>
              Those sound perfect! Can you add a slow dance song?
            </UserMessage>
            <AIMessage>
              How about &ldquo;Perfect&rdquo; by Ed Sheeran?
            </AIMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};

const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};

const SongSuggestion = ({ title, artist }: { title: string; artist: string }) => {
  return (
    <div className="flex items-center justify-between text-[10px] sm:text-xs">
      <div className="flex items-center space-x-2">
        <IconMusic className="w-3 h-3" />
        <span>{title} - {artist}</span>
      </div>
      <IconHeart className="w-3 h-3 text-pink-500 cursor-pointer" />
    </div>
  );
};