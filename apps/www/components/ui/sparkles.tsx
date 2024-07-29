"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Sparkles = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("relative inline-block", className)} {...props}>
      <Particles />
      {children}
    </span>
  );
};

const Particles = () => {
  return (
    <>
      <span className="absolute top-[-5px] left-[2px] h-[4px] w-[4px] rounded-full bg-pink-300 shadow-xl animate-sparkle-1"></span>
      <span className="absolute top-[2px] right-[-3px] h-[3px] w-[3px] rounded-full bg-pink-200 shadow-xl animate-sparkle-2"></span>
      <span className="absolute bottom-[-4px] left-[4px] h-[3px] w-[3px] rounded-full bg-pink-400 shadow-xl animate-sparkle-3"></span>
    </>
  );
};