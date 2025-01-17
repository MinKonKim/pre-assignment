import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./route";
import RouteGuard from "./RouteGaurd";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element: Component, protected: isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              <RouteGuard component={Component} protected={isProtected} />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
