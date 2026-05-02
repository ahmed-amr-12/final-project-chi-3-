import React from "react";

export function Button({ children, variant = "default" }) {
  let style = "px-4 py-2 rounded-md text-sm font-medium ";

  if (variant === "default") {
    style += "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "outline") {
    style += "border border-gray-300 hover:bg-gray-100";
  } else if (variant === "ghost") {
    style += "hover:bg-gray-100";
  }

  return <button className={style}>{children}</button>;
}