import { useState } from "react";

interface UseInputReturn {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
export default useInput;
