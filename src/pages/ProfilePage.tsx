import { useState } from "react";
import UpdateInput from "../components/common/Input/UpdateInput";
import AvatarUploader from "../components/loader/AvatarUploader";
import { useUpdateProfile } from "../hooks/useUser";
import { useUserStore } from "../stores/userStore";
import { getCookie } from "../utils/cookie";

const ProfilePage = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const { mutate: updateProfile } = useUpdateProfile(
    getCookie("accessToken") || ""
  );

  const [isUploading, setIsUploading] = useState(false);

  if (!user) {
    return <p>로그인이 필요합니다.</p>;
  }
  const handleNicknameUpdate = (newNickname: string) => {
    updateProfile(
      { nickname: newNickname },
      {
        onSuccess: (updatedData) => {
          setUser({ ...user, nickname: updatedData.nickname }); // Zustand 상태 업데이트
          alert("닉네임이 변경되었습니다!");
        },
        onError: () => {
          alert("닉네임 변경에 실패했습니다.");
        },
      }
    );
  };

  // 아바타 업데이트 핸들러
  const handleAvatarUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    const formData = {
      avatar: file,
      nickname: user.nickname,
    };

    setIsUploading(true);
    updateProfile(formData, {
      onSuccess: (updatedData) => {
        setUser({ ...user, avatar: updatedData.avatar }); // Zustand 상태 업데이트
        alert("프로필 이미지가 변경되었습니다!");
      },
      onError: () => {
        alert("프로필 이미지 변경에 실패했습니다.");
      },
      onSettled: () => {
        setIsUploading(false);
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <AvatarUploader
          avatarUrl={user.avatar!}
          isUploading={isUploading}
          onAvatarChange={handleAvatarUpdate}
        />

        <UpdateInput
          initialValue={user.nickname}
          onUpdate={handleNicknameUpdate}
        />
        <p className="text-gray-600 text-center mt-2">ID: {user.id}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
