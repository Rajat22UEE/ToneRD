"use client";

import * as React from "react";
import clx from "clsx";

// Styling variants
const VARIANT_CLASSES = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-orange-500 text-white hover:bg-orange-600",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border-2 border-blue-600 border-dotted bg-transparent text-blue-700",
  link: "bg-transparent text-blue-700 underline hover:text-blue-900 p-0 h-auto",
};

// Size variants
const SIZE_CLASSES = {
  default: "h-9 px-4 py-2 text-sm rounded-md",
  sm: "h-8 px-3 py-1 text-sm rounded",
  lg: "h-10 px-6 py-2 text-base rounded-lg",
};

// Animation variants (CSS-based only)
const ANIMATION_CLASSES = {
  none: "",
  elevation: "hover:-translate-y-1 hover:shadow-lg transition-all duration-300",
  scale: "hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out",
  bounce: "hover:animate-bounce transition-all duration-300",
  colorChange: "hover:bg-green-600 transition-colors duration-300 ease-in-out",
  clickShrink: "active:scale-95 transition-transform duration-150",
  borderFlash: "hover:border-1 hover:border-yellow-400 transition-all duration-500",
};

function Button({
  className,
  variant = "default",
  size = "default",
  animation = "none",
  children,
  ...props
}) {
  return (
    <button
      data-slot="button"
      className={clx(
        "inline-flex items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        ANIMATION_CLASSES[animation],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
