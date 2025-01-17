import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../components";
import { useGetUserProfile, useUpdateProfile } from "../features/user/hooks";
import { ProfileRequestType } from "../features/user/types";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetUserProfile();
  const updateProfile = useUpdateProfile();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset } = useForm<ProfileRequestType>({
    defaultValues: {
      nickname: user?.nickname || "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        nickname: user.nickname,
      });
    }
  }, [user, reset]);

  useEffect(() => {
    if (user && user.id !== id) {
      navigate(`/profile/${user.id}`);
    }
  }, [user, id, navigate]);

  const onSubmit: SubmitHandler<ProfileRequestType> = (data) => {
    if (!user) return;

    const updatedData = {
      nickname: data.nickname,
      avatar: data.avatar || user.avatar,
    };

    updateProfile.mutate(updatedData);
    setIsEditing(false);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex-center min-h-screen">
      <form
        className="flex-center flex-col gap-2 w-50rem border p-4 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isEditing ? (
          <>
            <div>
              <label htmlFor="avatar">프로필 이미지</label>
              <input type="file" id="avatar" {...register("avatar")} />
            </div>
            <div>
              <Input
                label="nickname"
                type="text"
                tag="닉네임"
                register={register}
                isFull
              />
            </div>
            <button type="submit">저장</button>
          </>
        ) : (
          <>
            {user && (
              <div className="profile-preview">
                <h2>프로필</h2>
                {user.avatar && (
                  <img
                    src={URL.createObjectURL(user.avatar)}
                    alt="프로필 이미지"
                  />
                )}
                <p>닉네임: {user.nickname}</p>
              </div>
            )}
            <Button type="button" onClick={() => setIsEditing(true)}>
              수정
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
