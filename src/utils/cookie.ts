import { Cookies } from "react-cookie";

const cookies = new Cookies();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCookie = (name: string, value: string, options: any) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name, { path: "/" });
};
