import React from "react";
import "./Button.scss";

interface buttonProps {
  children: string;
}

export const SassButton = ({ children }: buttonProps) => {
  return <button className="sassButton">{children}</button>;
};

export const TailwindButton = ({ children }: buttonProps) => {
  return (
    <button className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
      {children}
    </button>
  );
};
