import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AuthLayout } from "../layouts";
import { LoginPage, MainPage, ProfilePage, RegisterPage } from "../pages";
import RouteGuard from "./RouteGaurd";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/main" replace />} />
          <Route
            path="/login"
            element={<RouteGuard component={LoginPage} protected={false} />}
          />
          <Route
            path="register"
            element={<RouteGuard component={RegisterPage} protected={false} />}
          />
        </Route>
        <Route path="/main" element={<MainPage />} />
        {/* <Route
          path="/main"
          element={<RouteGuard component={MainPage} protected={true} />}
        /> */}
        <Route
          path="/profile"
          element={<RouteGuard component={ProfilePage} protected={true} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
