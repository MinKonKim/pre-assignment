/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends Record<string, any>>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  tag?: string;
  isFull?: boolean;
  errors?: FieldErrors<T>;
}

const Input = <T extends Record<string, any>>({
  label,
  register,
  required,
  tag,
  isFull,
  errors,
  ...props
}: InputProps<T>) => {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const fullWidthClass = isFull ? "w-full" : "";
  const errorClass =
    errors && errors[label] && isClicked && value
      ? "border-red-500"
      : isClicked && !errors?.[label] && value
      ? "border-green-500"
      : "";

  return (
    <div className={`flex-center flex-col reactive-input ${fullWidthClass}`}>
      <label htmlFor={label} className="font-bold w-full">
        {tag}
      </label>
      <input
        id={label}
        {...register(label, { required })}
        className={`rounded-lg border p-2 ${fullWidthClass} ${errorClass}`}
        onClick={handleClick}
        onChange={handleChange}
        {...props}
      />
      {errors && errors[label] && isClicked && value && (
        <span className="text-red-500">{errors[label]?.message as string}</span>
      )}
    </div>
  );
};

export default Input;
