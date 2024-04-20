import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tw-merge";
import { ZodIssue } from "zod";

export function validationErrorHandler(errors: ZodIssue[]): {
  [key: string]: string;
} {
  const newErrors: { [key: string]: string } = {};
  errors.forEach((err) => {
    const key = err.path.join(".");
    newErrors[key] = err.message;
  });
  return newErrors;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
