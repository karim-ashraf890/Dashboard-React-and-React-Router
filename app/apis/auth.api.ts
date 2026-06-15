import axios from "axios";

export const signIn = (data: { email: string; password: string }) => {
  return axios.post(
    "http://127.0.0.1:9696/authentication/dashboard_login",
    data,
  );
};
