import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { set } from "zod";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean; // Add the _retry property
}

const backend_url = "https://olas-lms-3z3lnppmra-as.a.run.app";
const api = axios.create({ baseURL: backend_url });

const getAccessToken = (): string | undefined => {
  return Cookies.get("access");
};

const setAccessToken = (
  config: AxiosRequestConfig,
  accessToken: string,
): void => {
  if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
};

api.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    setAccessToken(config, accessToken);
  }
  return config;
});

let refreshAttempts = 0; // Initialize the counter

api.interceptors.response.use(
  (response) => response, // Return the response for all successful requests
  async (error) => {
    if (error.response) {
      const originalRequest = error.config as CustomAxiosRequestConfig; // Cast error.config to CustomAxiosRequestConfig
      if (
        error.response.status === 401 &&
        originalRequest &&
        !originalRequest._retry &&
        refreshAttempts < 3
      ) {
        originalRequest._retry = true;

        try {
          const refresh = Cookies.get("refresh");
          if (!refresh) {
            const currentPath = useRouter().asPath;
            Cookies.set("return_path", currentPath);
            return Promise.reject(error.response); // Reject with the original error
          }

          const refreshResponse = await api.post("auth/token/refresh/", {
            refresh,
          });

          Cookies.set("access", refreshResponse.data.access);

          // Ensure that originalRequest.headers is defined before accessing its properties
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
          }

          return axios(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          return Promise.reject(error.response); // Reject with the original error
        }
      } else if (refreshAttempts >= 3) {
        console.error("Token refresh attempts exceeded. Redirecting to login.");
        Cookies.remove("access");
        Cookies.remove("refresh");
        Cookies.remove("user");
        return Promise.reject(error.response); // Reject with the original error
      }
    }
    // Return the error response for both failed requests and bad requests
    return error.response as AxiosResponse<any>;
  },
);

export default api;
