import React, { forwardRef, useState } from "react";
import { validatePassword } from "../../../utils/validations";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | null; // 추가적인 에러 메시지
  className?: string;
  validate?: boolean; // 유효성 검사 여부
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", type, validate = false, ...props }, ref) => {
    const [validationError, setValidationError] = useState<string | null>(null);

    // 기본 스타일 + 에러 여부에 따른 동적 클래스
    const inputClassName = `
      border rounded p-2 focus:outline-none 
      ${validationError || error ? "border-red-500" : "border-gray-300"} 
      ${className}
    `.trim();

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (type === "password" && validate) {
        const validationResult = validatePassword(e.target.value);
        if (!validationResult.isValid) {
          setValidationError(validationResult.errors[0]); // 첫 번째 에러 메시지만 표시
        } else {
          setValidationError(null);
        }
      }
    };

    return (
      <div>
        <input
          ref={ref}
          {...props}
          type={type}
          className={`${inputClassName} w-full`}
          onBlur={handleBlur} // 포커스 아웃 시 유효성 검사
        />
        {(validationError || error) && (
          <p className="text-red-500 text-sm mt-1">
            {validationError || error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // forwardRef로 래핑된 컴포넌트 이름 설정

export default Input;
