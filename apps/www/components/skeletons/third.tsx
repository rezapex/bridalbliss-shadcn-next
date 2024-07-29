"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconDots, IconPlus, IconUser, IconUsers } from "@tabler/icons-react";
import { Switch } from "../switch";

export const SkeletonThree = () => {
  return (
    <div className="h-full w-full sm:w-[80%] mx-auto bg-white dark:bg-neutral-800 shadow-2xl dark:shadow-white/40 mt-10 group rounded-md">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none z-[11]" />

      <div className="flex flex-1 w-full h-full flex-col space-y-2">
        <div className="flex justify-between border-b dark:border-neutral-700 pb-2 p-4">
          <p className="text-muted text-sm font-bold dark:text-muted-dark">
            Seating Chart
          </p>
          <p className="shadow-derek text-muted dark:text-muted-dark text-sm px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center dark:bg-neutral-700">
            <IconPlus className="h-4 w-4 text-muted dark:text-muted-dark" />{" "}
            <span>Add Table</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <TableRow title="Head Table" guestCount={8} vipTable />
          <TableRow title="Family Table 1" guestCount={10} />
          <TableRow title="Friends Table" guestCount={8} />
          <TableRow title="Colleagues Table" guestCount={6} />
          <TableRow title="Kids Table" guestCount={4} />
        </div>
      </div>
    </div>
  );
};

export const TableRow = ({
  title,
  guestCount,
  vipTable = false,
}: {
  title: string;
  guestCount: number;
  vipTable?: boolean;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <p className={`text-sm ${vipTable ? 'text-pink-500 font-semibold' : 'text-muted dark:text-muted-dark'} shadow-aceternity dark:bg-neutral-700 px-2 py-1 rounded-md`}>
          {title}
        </p>
        <div className="flex items-center space-x-1 text-muted dark:text-muted-dark">
          <IconUsers className="h-4 w-4" />
          <p className="text-xs">{guestCount}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <IconDots className="h-4 w-4 text-muted dark:text-muted-dark cursor-pointer" />
      </div>
    </div>
  );
};