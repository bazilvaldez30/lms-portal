import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { usePathname, useRouter } from "next/navigation";

import { SET_USER } from "../redux/userSlice";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import api from "./api";
import { useQuery } from "react-query";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();

export const useGetPathName = () => {
  const url = usePathname();

  return { url };
};

export const useNavbarScroll = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Run handleScroll once when the component mounts
    handleScroll();

    // Attach handleScroll to the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrolled };
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleManualLogin = async (formData: any, setErrors: Function) => {
    try {
      const response = await api.post(`/auth/login/`, formData);
      if (!(response.status >= 200 && response.status <= 299)) {
        setErrors({ responseError: response.data.error });
        return;
      }

      toast.success("Login successful");
      Cookies.set("access", response.data.access);
      Cookies.set("refresh", response.data.refresh);
      dispatch(SET_USER(response.data.user));
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSocial = async (provider: string) => {
    try {
      const response = await api.post(`/auth/${provider}/login/`);
      console.log(response);
      if (!(response.status >= 200 && response.status <= 299))
        console.log(response);

      const { url } = response.data;
      router.push(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      Cookies.remove("access");
      Cookies.remove("refresh");
      dispatch(SET_USER(null));

      router.push("/login");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleManualLogin, handleLogout, handleLoginSocial };
};
