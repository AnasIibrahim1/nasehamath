"use client";

interface BlurCircleProps {
  size?: number;
  color?: string;
  position?: {
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
  };
  className?: string;
}

export default function BlurCircle({
  size = 256,
  color = "bg-primary/20",
  position = { top: 0, left: 0 },
  className = "",
}: BlurCircleProps) {
  return (
    <div
      className={`pointer-events-none absolute ${color} rounded-full blur-3xl ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
      }}
    />
  );
}
