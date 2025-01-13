/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends Record<string, any>> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
}

const Input = <T extends Record<string, any>>({
  label,
  register,
  required,
}: InputProps<T>) => {
  return (
    <div className="flex itmes-center">
      <label className="font-bold w-[80px] flex items-center justify-center">
        {label}
      </label>
      <input
        className="rounded-lg border border-spacing-2"
        {...register(label, { required })}
      />
    </div>
  );
};

export default Input;
