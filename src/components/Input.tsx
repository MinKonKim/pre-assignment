/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends Record<string, any>>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  tag?: string;
  isFull?: boolean;
}

const Input = <T extends Record<string, any>>({
  label,
  register,
  required,
  tag,
  isFull,
  ...props
}: InputProps<T>) => {
  const fullWidthClass = isFull ? "w-full" : "";
  return (
    <div className={`flex-center flex-col reactive-input ${fullWidthClass}`}>
      <label className={`font-bold w-[10rem] flex-left ${fullWidthClass} `}>
        {tag}
      </label>
      <input
        className={`rounded-lg border p-2 ${fullWidthClass} `}
        {...register(label, { required })}
        {...props}
      />
    </div>
  );
};

export default Input;
