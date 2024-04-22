import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

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

/* const handleTokenRefresh = async (
  error: AxiosError,
): Promise<AxiosResponse<any> | never> => {
  if (error.response && error.response.status === 401 && !error.config._retry) {
    error.config._retry = true;

    try {
      const refresh = Cookies.get("refresh");
      if (!refresh) {
        const currentPath = useRouter().asPath;
        Cookies.set("return_path", currentPath);
        return Promise.reject(error.response);
      }

      const refreshResponse = await api.post("auth/token/refresh/", {
        refresh,
      });
      Cookies.set("access", refreshResponse.data.access);
      error.config.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
      return axios(error.config);
    } catch (refreshError) {
      console.error("Token refresh failed:", refreshError);
      return Promise.reject(error.response);
    }
  }

  return Promise.reject(error.response);
}; */

api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setAccessToken(config, accessToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  /* (error) => {
    return handleTokenRefresh(error).then(
      (res) => res,
      (err) => Promise.reject(err),
    );
  }, */
);

export default api;
