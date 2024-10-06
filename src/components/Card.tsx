import { ReactNode } from "react";

interface CardProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export const Card = ({ title, children, className }: CardProps) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-lg p-3 shadow-md ${className}`}
    >
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
};
