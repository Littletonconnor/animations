"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

export default function SharedLayout() {
  const [activeTab, setActiveTab] = useState("");
  const [direction, setDirection] = useState(false);

  return (
    <div className="flex gap-8 justify-center items-center py-12">
      <ul
        className={cn(
          direction && "flex flex-col gap-4 justify-center",
          !direction && "flex flex-row gap-4 justify-center"
        )}
      >
        {TABS.map((tab) => {
          return (
            <motion.li
              tabIndex={0}
              layout
              key={tab}
              className={cn(
                "relative cursor-pointer px-2 py-1",
                activeTab === tab && "text-gray-700",
                activeTab !== tab && "text-gray-400"
              )}
              onFocus={() => setActiveTab(tab)}
              onMouseEnter={() => setActiveTab(tab)}
              onMouseLeave={() => setActiveTab(tab)}
            >
              {activeTab === tab ? (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-black/5"
                />
              ) : null}
              <span className="text-sm relative whitespace-nowrap">{tab}</span>
            </motion.li>
          );
        })}
      </ul>
      <button
        className="text-sm text-gray-700 cursor-pointer w-fit"
        onClick={() => setDirection(!direction)}
      >
        Change Direction
      </button>
    </div>
  );
}

const TABS = ["Saved Sites", "Collections", "48 Following", "52 Followers"];
