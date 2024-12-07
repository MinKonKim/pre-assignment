import React from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form = ({ children, className = "", ...props }: FormProps) => {
  return (
    <form
      className={`flex flex-col gap-4 w-full max-w-md p-8 bg-white shadow-md rounded ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
