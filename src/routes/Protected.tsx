import { Navigate, Outlet } from "react-router-dom";
import { getUserFromStorage } from "../features/auth/utils";

const Protected = () => {
  const user = getUserFromStorage();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
