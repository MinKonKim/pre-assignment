import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage, LoginPage, RegisterPage } from "../pages";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route
          element={
            <PrivateRoute requiredRole="authorized" userRole={userRole} />
          }
        >
          <Route path="/" element={<MainPage />} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
