"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BlurImage } from "../blur-image";

export const SkeletonOne = () => {
  return (
    <div className="relative flex p-8 gap-10 h-full">
      <div className="w-full md:w-[90%] p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 opacity-20 dark:opacity-60">
          <UserMessage>
            I want to plan a rustic outdoor wedding for 100 guests. Can you help me get started?
          </UserMessage>
          <AIMessage>
            Absolutely! I&apos;d be happy to help you plan your rustic outdoor wedding. Let&apos;s start with the basics. What season are you considering for your wedding?
          </AIMessage>
          <UserMessage>
            We&apos;re thinking about a fall wedding, maybe in October.
          </UserMessage>
          <AIMessage>
            Great choice! Fall is perfect for a rustic outdoor wedding. Let&apos;s start by looking at some venue options that would suit your theme and guest count.
          </AIMessage>
          <UserMessage>
            That sounds perfect. Can you also suggest some rustic decor ideas?
          </UserMessage>
          <AIMessage>
            Of course! I&apos;ll compile a list of rustic decor ideas and potential venues for you to review. Here&apos;s a preview of what we can create for your special day.
          </AIMessage>
        </div>
      </div>
      <div className="flex flex-col gap-4 absolute inset-0">
        <div className="p-2 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto flex-shrink-0 z-20 group-hover:scale-[1.02] transition duration-200">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] flex-shrink-0">
            <BlurImage
              src="/rustic-venue.jpg"
              alt="Rustic Wedding Venue"
              width={800}
              height={800}
              className="rounded-[20px] w-full h-full object-cover object-bottom aspect-square flex-shrink-0 grayscale"
            />
          </div>
        </div>
        <div className="p-2 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto flex-shrink-0 z-20 group-hover:scale-[1.02] transition duration-200">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] flex-shrink-0">
            <BlurImage
              src="/rustic-decor.jpg"
              alt="Rustic Wedding Decor"
              width={800}
              height={800}
              className="rounded-[20px] w-full h-full object-cover object-bottom aspect-square flex-shrink-0 grayscale"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

const UserMessage = ({ children }: { children: React.ReactNode }) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      className="flex flex-row rounded-2xl p-2 items-start space-x-2 bg-white dark:bg-neutral-900"
    >
      <Image
        src="/avatar.png"
        alt="avatar"
        height="100"
        width="100"
        className="rounded-full h-4 w-4 md:h-10 md:w-10"
      />
      <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
    </motion.div>
  );
};

const AIMessage = ({ children }: { children: React.ReactNode }) => {
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    // <motion.div
    //   variants={variantsSecond}
    //   className="flex flex-row rounded-2xl p-2 items-center justify-start space-x-2 bg-white dark:bg-neutral-900"
    // >
    //   <div className="h-4 w-4 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
    //   <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
    // </motion.div>
    <motion.div
      className="flex flex-row rounded-2xl p-2 items-start space-x-2 bg-white dark:bg-neutral-900"
    >
      <Image
        src="/robot-avatar.png"
        alt="avatar"
        height="100"
        width="100"
        className="rounded-full h-4 w-4 md:h-10 md:w-10"
      />
      <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
    </motion.div>
  );
};
