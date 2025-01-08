import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";

const isAuthenticated = true; // 실제 인증 로직으로 대체
const userRole = "admin"; // 실제 사용자 역할 로직으로 대체

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} /> */}
        <Route
          path="/"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredRole="admin"
              userRole={userRole}
            >
              <App />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
