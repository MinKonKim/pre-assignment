import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../common/Button/BaseButton";

const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    handleLogout();
    navigate(0);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center hover:opacity-90">
            MyWebsite
          </Link>
        </div>

        <nav className="flex items-center space-x-6">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                <img
                  src="src\assets\user.png"
                  alt="User Profile"
                  className="w-12 h-8"
                />
              </Link>
              <Button
                onClick={logout}
                className="bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                로그인
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
