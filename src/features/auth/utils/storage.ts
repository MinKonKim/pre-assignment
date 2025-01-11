import { UserStorageType } from "../types";

export const getUserFromStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const setUserToStorage = (user: UserStorageType) => {
  const { accessToken, userId } = user;
  localStorage.setItem("user", JSON.stringify({ accessToken, userId }));
};

export const removeUserFromStorage = () => {
  localStorage.removeItem("user");
};
