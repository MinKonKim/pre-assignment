import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
  requiredRole: string;
  userRole: string;
}

const PrivateRoute = ({
  children,
  isAuthenticated,
  requiredRole,
  userRole,
}: PrivateRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
