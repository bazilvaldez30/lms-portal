"use client";

import React, { useState } from "react";
import { FaArrowDown, FaArrowUpLong } from "react-icons/fa6";
import { cn } from "../shared/utils";

interface ExpandableTextProps {
  children: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <p
        className={cn(`line-clamp-5 text-muted`, {
          "line-clamp-none": expanded,
        })}
      >
        {children}
      </p>
      <div className="block md:hidden">
        {!expanded ? (
          <button
            className="button-primary mx-auto mt-3 gap-2 rounded-md bg-custom-2 text-xs"
            onClick={toggleExpanded}
          >
            Read more <FaArrowDown />
          </button>
        ) : (
          <button
            className="button-primary mx-auto mt-3 gap-2 rounded-md bg-custom-2 text-xs"
            onClick={toggleExpanded}
          >
            Read less
            <FaArrowUpLong />
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpandableText;
