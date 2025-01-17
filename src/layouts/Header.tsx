import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import useAuthStore from "../features/auth/stores/useAuthStore";
import { useUserStore } from "../features/user/store";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, clearCookie } = useAuthStore();
  const { user, clearUser } = useUserStore();

  const handleLogout = () => {
    clearUser();
    clearCookie();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src={
            user?.avatar
              ? URL.createObjectURL(user.avatar)
              : "/default-avatar.png"
          }
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2">{user?.nickname || "Guest"}</span>
      </div>
      <nav>
        {isAuthenticated ? (
          <>
            <Button
              className="mr-4"
              size="medium"
              onClick={() => navigate(`/profile/${user?.id}`)}
            >
              마이페이지
            </Button>
            <Button onClick={handleLogout} size="medium">
              로그아웃
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              로그인
            </Link>
            <Link to="/register">회원가입</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
