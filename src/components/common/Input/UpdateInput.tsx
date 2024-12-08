import { useState } from "react";
import Title from "../Text/Title";

interface UpdateInputProps {
  initialValue: string; // 초기 값
  onUpdate: (value: string) => void; // 업데이트 콜백 함수
}

const UpdateInput = ({ initialValue, onUpdate }: UpdateInputProps) => {
  const [value, setValue] = useState(initialValue); // 현재 입력 값
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUpdate = () => {
    if (value.trim()) {
      onUpdate(value.trim());
      setIsEditing(false);
    } else {
      alert("값을 입력해주세요.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <div className="relative group w-full flex items-center justify-center">
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <Title className="text-gray-800">{initialValue}</Title>
      )}
      {/* Rename Image */}
      <img
        src="/src/assets/rename.png"
        alt="Rename"
        className={`w-6 h-6 ml-2 absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer ${
          isEditing ? "hidden" : ""
        }`}
        onClick={() => setIsEditing(true)}
      />
    </div>
  );
};

export default UpdateInput;
