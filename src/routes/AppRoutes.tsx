import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { LandingPage, LoginPage, MainPage } from "../pages";

const isAuthenticated = true; // 실제 인증 로직으로 대체
const userRole = "admin"; // 실제 사용자 역할 로직으로 대체

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole="authorized"
              userRole={userRole}
            />
          }
        >
          <Route path="/" element={<MainPage />} />
          {/* 다른 보호된 경로를 여기에 추가 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
