import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  requiredRole?: string;
  userRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  requiredRole,
  userRole,
}) => {
  // 인증 여부 확인
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 권한 확인
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 조건 만족 시 렌더링
  return <Outlet />;
};

export default PrivateRoute;
