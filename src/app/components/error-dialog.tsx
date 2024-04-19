import React, { ReactNode } from "react";

interface ErrorDialogProps {
  children: ReactNode;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ children }) => {
  return <p className="mt-1 text-xs text-red-500">{children}</p>;
};

export default ErrorDialog;
