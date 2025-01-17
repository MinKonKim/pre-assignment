import { LoginPage, MainPage, ProfilePage, RegisterPage } from "../pages";

type RouteConfig = {
  path: string;
  element: React.ComponentType;
  protected: boolean;
};

export const routes: RouteConfig[] = [
  {
    path: "/login",
    element: LoginPage,
    protected: false,
  },
  {
    path: "/register",
    element: RegisterPage,
    protected: false,
  },
  {
    path: "/profile/:id",
    element: ProfilePage,
    protected: true,
  },
  {
    path: "/",
    element: MainPage,
    protected: true,
  },
];
