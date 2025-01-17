import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks";

interface RouteGuardProps {
  component: React.ComponentType;
  protected: boolean;
}

const RouteGuard = ({
  component: Component,
  protected: isProtected,
}: RouteGuardProps) => {
  const { isAuthenticated } = useAuth();
  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isProtected && isAuthenticated) {
    return <Navigate to="/main" replace />;
  }

  return <Component />;
};

export default RouteGuard;
