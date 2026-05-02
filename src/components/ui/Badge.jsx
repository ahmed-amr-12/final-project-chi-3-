import React from "react";

export function Badge({ children }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-red-500 text-white">
      {children}
    </span>
  );
}