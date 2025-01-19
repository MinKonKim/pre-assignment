import { useAuthStore } from "../features/auth/stores";
import { useUserStore } from "../features/user/store";
import { MainLayout } from "../layouts";

const MainPages = () => {
  const { user } = useUserStore();
  const { isAuthenticated } = useAuthStore();
  // TODO : 로그인 프로세스 정상 작동 테스트
  // TODO : 메인화면 UI 설계 및 구현
  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        {isAuthenticated && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">환영합니다!</h2>
            <p>{user?.nickname}님</p>
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
