import React, { ReactNode } from "react";

const ErrorMsg = ({ children }: { children: ReactNode }) => {
  return (
    <p className="animate__animated animate__fadeIn mt-1 text-xs text-red-500">
      {children}
    </p>
  );
};

export default ErrorMsg;
