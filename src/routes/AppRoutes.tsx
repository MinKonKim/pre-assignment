import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage, LoginPage, MainPage, RegisterPage } from "../pages";
import PrivateRoute from "./PrivateRoute";

const isAuthenticated = true; // 실제 인증 로직으로 대체
const userRole = "admin"; // 실제 사용자 역할 로직으로 대체

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
