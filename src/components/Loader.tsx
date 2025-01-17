import React from "react";

type LoaderSize = "sm" | "md" | "lg" | "xl";
type LoaderColor = "primary" | "white" | "gray" | "success";

interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
  className?: string;
  fullWidth?: boolean;
}

const sizeStyles: Record<LoaderSize, string> = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-3",
  xl: "w-12 h-12 border-4",
};

const colorStyles: Record<LoaderColor, string> = {
  primary: "border-blue-500 border-t-transparent",
  white: "border-white border-t-transparent",
  gray: "border-gray-500 border-t-transparent",
  success: "border-green-500 border-t-transparent",
};

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "primary",
  className = "",
  fullWidth = false,
}) => {
  const containerClasses = `
    flex items-center justify-center
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const spinnerClasses = `
    inline-block rounded-full
    animate-spin
    ${sizeStyles[size]}
    ${colorStyles[color]}
    border-solid
  `.trim();

  return (
    <div className={containerClasses}>
      <span className={spinnerClasses} role="status" aria-label="loading" />
    </div>
  );
};

export default Loader;
