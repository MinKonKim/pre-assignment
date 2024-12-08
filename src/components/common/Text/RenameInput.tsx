import { ChangeEvent, useState } from "react";
import Input from "../Input/Input";
import Title from "./Title";

interface RenameInputProps {
  initialValue?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RenameInput = ({ initialValue, value, onChange }: RenameInputProps) => {
  const [isRename, setIsRename] = useState(false);

  return isRename ? (
    <Input value={value} onChange={onChange} />
  ) : (
    <div className="relative group w-full flex items-center justify-between">
      <Title>{initialValue}</Title>

      <img
        src={"/src/assets/rename.png"}
        alt="Rename Button"
        className="w-6 h-6 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        onClick={() => setIsRename(true)}
      />
    </div>
  );
};

export default RenameInput;
