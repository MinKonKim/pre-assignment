import { MainPage, ProfilePage } from "../pages";

type RouteConfig = {
  path: string;
  element: React.ComponentType;
  protected: boolean;
};

export const routes: RouteConfig[] = [
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
