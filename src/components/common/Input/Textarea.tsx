import React, { forwardRef } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFull?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", isFull = false, ...props }, ref) => {
    const baseStyles = "p-3 m-1 border-solid border-2 rounded-md";
    const fullWidthStyle = isFull ? "w-full" : "";

    return (
      <textarea
        ref={ref}
        className={`${baseStyles} ${fullWidthStyle} ${className}`}
        {...props} // 나머지 props 전달
      />
    );
  }
);

Textarea.displayName = "Textarea"; // forwardRef 사용 시 컴포넌트 이름 설정

export default Textarea;
