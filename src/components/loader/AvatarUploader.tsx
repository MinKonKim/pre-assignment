import React from "react";

interface AvatarUploaderProps {
  avatarUrl: string; // 현재 아바타 이미지 URL
  isUploading: boolean; // 업로드 상태
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 아바타 변경 핸들러
}

const AvatarUploader = ({
  avatarUrl,
  isUploading,
  onAvatarChange,
}: AvatarUploaderProps) => {
  return (
    <div className="relative group">
      <img
        src={avatarUrl || "/src/assets/user.png"}
        alt="User Avatar"
        className={`w-24 h-24 rounded-full mx-auto mb-4 ${
          isUploading ? "opacity-50" : ""
        }`}
      />

      <label
        htmlFor="avatar-upload"
        className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <img
          src="/src/assets/rename.png"
          alt="Rename Avatar"
          className="w-6 h-6"
        />
      </label>

      <input
        id="avatar-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onAvatarChange}
      />
    </div>
  );
};

export default AvatarUploader;
