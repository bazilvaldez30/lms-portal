"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAppDispatch } from "../shared/hooks";
import { SET_USER } from "../redux/userSlice";

export default function SetToken() {
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      const decodedString = JSON.parse(atob(token));
      const { access, refresh, user } = decodedString;

      Cookies.set("access", access);
      Cookies.set("refresh", refresh);
      dispatch(SET_USER(user));
      router.push("/");
    }
  }, []);

  return <></>;
}
