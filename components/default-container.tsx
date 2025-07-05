import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const DefaultContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="border border-gray-300 rounded-lg bg-gray-800 p-4">
      {children}
    </div>
  );
};

export default DefaultContainer;
