"use client";

import React, { useState } from "react";
import Image from "next/image";
import googleImage from "/public/images/google.png";
import { cn, validationErrorHandler } from "../shared/utils";
import ErrorDialog from "../components/error-dialog";
import { LoginFormSchema } from "../shared/schemas";

export default function LoginForm() {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = LoginFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const errorMsgs = validationErrorHandler(validationResult.error.errors);
      return setErrors(errorMsgs);
    }

    // Form data is valid, proceed with submission
    setErrors({});
    console.log("Form data:", formData);
  };

  return (
    <form
      action=""
      className={cn("flex flex-col gap-5", {
        "gap-3": errors.password,
      })}
      onSubmit={handleSubmit}
    >
      <div
        className={cn("flex flex-col gap-3", {
          "gap-2": errors.email,
        })}
      >
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(`form-input`, {
              "border border-red-500": errors.email,
            })}
            placeholder="example@mail.com"
          />
          {errors.email && <ErrorDialog>{errors.email}</ErrorDialog>}
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
          {errors.password && <ErrorDialog>{errors.password}</ErrorDialog>}
        </div>
      </div>
      <button
        type="submit"
        className="button-primary rounded-md bg-red-500 py-2 text-white shadow-sm "
      >
        Login
      </button>
      <button>
        <div className="flex justify-center gap-2 rounded-md border border-solid px-10 py-3">
          <Image src={googleImage} alt="Google logo" width={25} height={25} />
          <p className="">Sign in with Google</p>
        </div>
      </button>
    </form>
  );
}
