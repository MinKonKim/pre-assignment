import { useAuthStore } from "../features/auth/stores";
import { useUserStore } from "../features/user/store";
import { MainLayout } from "../layouts";

const MainPages = () => {
  const { user } = useUserStore();
  const { isAuthenticated } = useAuthStore();
  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        {isAuthenticated && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">프로필 요약</h2>
            <p>닉네임: {user?.nickname}</p>
            {user?.avatar && (
              <img
                src={URL.createObjectURL(user.avatar)}
                alt="프로필 이미지"
                className="w-20 h-20 rounded-full"
              />
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default MainPages;
