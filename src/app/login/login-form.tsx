"use client";

import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import { cn, validationErrorHandler } from "../shared/helpers";
import { LoginFormSchema } from "../shared/schemas";
import {
  useAppSelector,
  useSocialLogin,
  useManualLogin,
} from "../shared/hooks";
import { socialLoginData } from "../shared/datas";
import ErrorMsg from "../components/error-msg";
import ErrorDialogBox from "../components/error-dialog";

export default function LoginForm() {
  //Redux State
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  //Hooks
  const { handleLoginSocial } = useSocialLogin();
  const { handleManualLogin } = useManualLogin();

  //Local State
  const [formData, setFormData] = useState<ILoginForm>({
    username_or_email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  //Event Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick =
    (provider: string) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      handleLoginSocial(provider);
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = LoginFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const errorMsgs = validationErrorHandler(validationResult.error.errors);
      setErrors(errorMsgs);
      return;
    }

    setErrors({});
    handleManualLogin(formData, setErrors);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className={cn("flex w-72 flex-col gap-5", {
        "gap-3": errors.password,
      })}
    >
      <div
        className={cn("flex flex-col gap-3", {
          "gap-2": errors.username_or_email,
        })}
      >
        <div>
          <label htmlFor="username_or_email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="username_or_email"
            id="username_or_email"
            value={formData.username_or_email}
            onChange={handleChange}
            className={cn(`form-input`, {
              "border border-red-500": errors.username_or_email,
            })}
            placeholder="example@mail.com"
          />
          {errors.username_or_email && (
            <ErrorMsg>{errors.username_or_email}</ErrorMsg>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={cn(`form-input`, {
              "border border-red-500": errors.password,
            })}
            placeholder="********"
          />
          {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        </div>
      </div>

      {errors.responseError && (
        <div className="-my-4">
          <ErrorDialogBox>{errors.responseError}</ErrorDialogBox>
        </div>
      )}

      <button
        type="submit"
        className="button-primary rounded-md bg-red-500 py-2 text-white shadow-sm "
      >
        Login
      </button>
      {socialLoginData.map((item) => (
        <button
          key={item.name}
          onClick={handleClick(item.name)}
          className="flex justify-center gap-2 rounded-md border border-solid px-10 py-3 hover:bg-custom-7"
        >
          <Image
            src={item.icon}
            alt={`${item.name} logo`}
            width={25}
            height={25}
          />
          <p className="font-medium">Sign in with {item.name}</p>
        </button>
      ))}
    </form>
  );
}
