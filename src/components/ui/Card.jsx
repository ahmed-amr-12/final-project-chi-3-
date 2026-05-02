import React from "react";

export function Card({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827] shadow-lg">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-6">{children}</div>;
}