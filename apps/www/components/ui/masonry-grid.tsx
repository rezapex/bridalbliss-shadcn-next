"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Item {
  id: number;
  title: string;
  height: number;
}

export const MasonryGrid = () => {
  const [columns, setColumns] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColumns = () => {
      const width = containerRef.current?.clientWidth || 0;
      if (width < 640) {
        setColumns(1);
      } else if (width < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const items: Item[] = [
    { id: 1, title: "Item 1", height: 200 },
    { id: 2, title: "Item 2", height: 300 },
    { id: 3, title: "Item 3", height: 250 },
    { id: 4, title: "Item 4", height: 180 },
    { id: 5, title: "Item 5", height: 220 },
    { id: 6, title: "Item 6", height: 280 },
    { id: 7, title: "Item 7", height: 200 },
    { id: 8, title: "Item 8", height: 320 },
    { id: 9, title: "Item 9", height: 270 },
  ];

  const columnWrapper = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "flex-start",
    flex: 1,
  };

  const columnItems: Item[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    const columnIndex = i % columns;
    columnItems[columnIndex].push(item);
  });

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {columnItems.map((column, i) => (
        <div key={i} style={columnWrapper}>
          {column.map((item) => (
            <motion.div
              key={item.id}
              style={{
                marginBottom: "20px",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                style={{
                  height: item.height,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};