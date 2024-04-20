import React, { ReactNode } from "react";

const ErrorDialog = ({ children }: { children: ReactNode }) => {
  return <p className="mt-1 text-xs text-red-500">{children}</p>;
};

export default ErrorDialog;
