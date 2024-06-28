// src/features/NumberGenerator/components/LotteryBall.tsx
import React from "react";

interface LotteryBallProps {
  value: number;
  color: string;
  size?: "L" | "M" | "S";
}

/**
 * LotteryBall component.
 * Renders a lottery ball with a number and a gradient background color.
 * Includes a bounce-in animation on render.
 */
export const LotteryBall: React.FC<LotteryBallProps> = ({
  value,
  color,
  size,
}) => {
  // Generic Tailwind class for the ball
  const genericClass = `flex items-center justify-center rounded-full text-white text-lg m-2 animate-bounce-in shadow-md ${color}`;

  // Return a ball of the appropriate size
  if (size === "L") {
    return <div className={`${genericClass} w-24 h-24`}>{value}</div>;
  }

  if (size === "S") {
    return <div className={`${genericClass} w-12 h-12`}>{value}</div>;
  }

  // Default to medium size if no size is provided
  return <div className={`${genericClass} w-16 h-16`}>{value}</div>;
};
