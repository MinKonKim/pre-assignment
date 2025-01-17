export const getUserFromStorage = (): string => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const setUserToStorage = (userId: string) => {
  localStorage.setItem("user", JSON.stringify({ userId }));
};

export const removeUserFromStorage = () => {
  localStorage.removeItem("user");
};
