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
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};

export default Input;
