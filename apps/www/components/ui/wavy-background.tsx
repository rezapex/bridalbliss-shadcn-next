import React from "react";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const id = React.useId();

  colors = colors ?? [
    "#fff", // white
    "#E5D1FA", // Light Lavender
    "#FFF0F5", // Lavender Blush
    "#FFB6C1", // Light Pink
  ];

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient id={`${id}-gradient`} gradientTransform="rotate(90)">
            {colors.map((color, index) => (
              <stop
                key={`${id}-${index}`}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
          <linearGradient
            id={`${id}-gradient-opacity`}
            gradientTransform="rotate(90)"
          >
            {colors.map((color, index) => (
              <stop
                key={`${id}-${index}`}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
                stopOpacity={waveOpacity}
              />
            ))}
          </linearGradient>
          <filter id={`${id}-blur`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
          </filter>
        </defs>
        <path
          d="M 0 200 L 0 0 L 1200 0 L 1200 200 Z"
          fill={backgroundFill ?? colors[colors.length - 1]}
        ></path>
        {[...Array(5)].map((_, index) => (
          <g key={`${id}-${index}`}>
            <use
              href={`#${id}-wave-${index}`}
              className={cn("animate-wave", {
                "animate-wave-slow": speed === "slow",
                "animate-wave-fast": speed === "fast",
              })}
              style={{
                animationDelay: `${(-index * 1000) / 2}ms`,
              }}
              y={30 * index}
              fill={`url(#${id}-gradient-opacity)`}
              filter={`url(#${id}-blur)`}
            />
          </g>
        ))}
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};