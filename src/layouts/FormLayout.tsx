import React from "react";

const FormLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default FormLayout;
