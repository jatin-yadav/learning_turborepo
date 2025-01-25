"use client";

import { ReactNode } from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  children: ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;

  onButtonClick?: () => void;
}

export const Button = ({ children, className, onButtonClick, size, bgColor, textColor }: ButtonProps) => {
  const inputSize = size === 'small' ? '30px' : size === 'medium' ? '44px' : '50px';
  return (
    <button
      className={className}
      onClick={onButtonClick}
      style={{ fontSize: "24px", padding: "12px 24px", width: "100%", height: inputSize, backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
};
