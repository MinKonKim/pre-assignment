import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => {
    // 기본 스타일 + 에러 여부에 따른 동적 클래스
    const inputClassName = `
      border rounded p-2 focus:outline-none 
      ${error ? "border-red-500" : "border-gray-300"} 
      ${className}
    `.trim();

    return (
      <div>
        <input ref={ref} {...props} className={`${inputClassName} w-full`} />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input"; // forwardRef로 래핑된 컴포넌트 이름 설정

export default Input;
