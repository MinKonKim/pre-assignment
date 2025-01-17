import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../components";
import useAuthStore from "../features/auth/stores/useAuthStore";

interface ProfileFormInputs {
  avatar: FileList;
  nickname: string;
}

const ProfilePage = () => {
  const { user, setUser } = useAuthStore();
  const { register, handleSubmit, reset } = useForm<ProfileFormInputs>({
    defaultValues: {
      nickname: user?.nickname || "",
    },
  });
  const onSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      nickname: data.nickname,
      avatar: data.avatar[0],
    };
    if (updatedUser.accessToken) {
      setUser(updatedUser);
    }
    reset();
  };

  return (
    <div className="flex-center min-h-screen">
      <form
        className="flex-center flex-col gap-2 w-50rem border p-4 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="file"
          label="avatar"
          register={register}
          tag="아이디"
          isFull
          required
        />
        <Input
          label="nickname"
          register={register}
          tag="닉네임"
          isFull
          required
        />
        <Button type="submit" variant="primary" size="large" isFull>
          저장
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
