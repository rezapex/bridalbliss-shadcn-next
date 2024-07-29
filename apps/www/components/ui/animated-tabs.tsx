"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
};

export const AnimatedTabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:space-x-4",
        containerClassName
      )}
    >
      <div className="flex flex-wrap justify-start mb-4 md:mb-0">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn("relative px-3 py-1.5 font-medium text-sm transition focus-visible:outline-2",
              activeTabClassName,
              tabClassName
            )}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {active.value === tab.value && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.title}
          </button>
        ))}
      </div>
      <div className={cn("mt-4 md:mt-0", contentClassName)}>
        <p>{active.value}</p>
      </div>
    </div>
  );
};