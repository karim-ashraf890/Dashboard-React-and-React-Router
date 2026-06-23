import axios, { type InternalAxiosRequestConfig } from "axios";
import { baseURL } from "../constants";
// import { refreshTokenFun } from "./refreshToken";

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  if (typeof window === "undefined") return config;

  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
