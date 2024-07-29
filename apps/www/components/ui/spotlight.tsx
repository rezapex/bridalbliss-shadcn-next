"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export const Spotlight = ({ children, className = "" }: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const handleMouseMove = (event: MouseEvent) => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;
      mouseX.current = x;
      mouseY.current = y;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;

    const updateSpotlight = () => {
      if (!container) return;
      container.style.setProperty("--mouse-x", `${mouseX.current}px`);
      container.style.setProperty("--mouse-y", `${mouseY.current}px`);
      animationFrameId = requestAnimationFrame(updateSpotlight);
    };

    animationFrameId = requestAnimationFrame(updateSpotlight);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-md bg-slate-900",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_500px_at_var(--mouse-x)_var(--mouse-y),rgba(255,182,255,0.15),transparent_100%)]" />
      <div className="relative z-0">{children}</div>
    </div>
  );
};