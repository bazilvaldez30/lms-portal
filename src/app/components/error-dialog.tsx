import React, { ReactNode } from "react";

const ErrorDialogBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="animate__animated animate__fadeIn my-2 rounded-md border border-red-400 bg-red-100 px-4 py-3 text-center text-red-700">
      <p className="text-sm">{children}</p>
    </div>
  );
};

export default ErrorDialogBox;
