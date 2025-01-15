import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

interface PrivateRouteProps {
  requiredRole?: string;
  userRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  requiredRole,
  userRole,
}) => {
  const isAuthenticated = useAuth();

  // 인증 여부 확인
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 권한 확인
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // 조건 만족 시 렌더링
  return <Outlet />;
};

export default PrivateRoute;
