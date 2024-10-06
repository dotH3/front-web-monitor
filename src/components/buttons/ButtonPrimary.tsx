import React, { ReactNode } from "react";

interface ButtonProps {
  isActive: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const ButtonPrimary = ({ isActive, onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`px-4 py-2 font-black rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300 shadow-inner ${
        !isActive && "bg-gray-400"
      }`}
    >
      <span className="">{children}</span>
    </button>
  );
};
