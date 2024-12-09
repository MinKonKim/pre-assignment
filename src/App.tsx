import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import UserProfileLoader from "./components/loader/UserProfileLoader";
import useAuth from "./hooks/useAuth";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import { getCookie } from "./utils/cookie";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {isAuthenticated && (
        <UserProfileLoader accessToken={getCookie("accessToken")} />
      )}
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
