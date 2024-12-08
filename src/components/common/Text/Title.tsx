import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Title = ({ children, className = "", ...props }: TitleProps) => {
  return (
    <h2 className={`font-semibold text-3xl ${className}`} {...props}>
      {children}
    </h2>
  );
};

export default Title;
