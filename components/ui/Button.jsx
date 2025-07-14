"use client";

import * as React from "react";
import clx from "clsx"; // or 'classnames' if you’re using that

// Variants and size styles
const VARIANT_CLASSES = {
  default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
  secondary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-300",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  outline: "border-2 border-blue-600 border-dotted bg-transparent text-blue-700 hover:bg-blue-50",
  link: "bg-transparent text-blue-700 underline hover:text-blue-900 p-0 h-auto",
};

const SIZE_CLASSES = {
  default: "h-9 px-4 py-2 text-sm rounded-md",
  sm: "h-8 px-3 py-1 text-sm rounded",
  lg: "h-10 px-6 py-2 text-base rounded-lg",
  icon: "h-9 w-9 flex items-center justify-center rounded-full p-0",
};

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <button
      data-slot="button"
      className={clx(
        "inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
      {...props}
    />
  );
}

export { Button };
